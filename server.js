const Sequelize = require('sequelize');
const { db, Country, Details, syncAndSeed } = require('./db');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname,  'src/index.html')));

app.get('/countries',  async(req, res, next) => {
    try{
        res.send(await Country.findAll());
    }
    catch(ex){
        next(ex);
    }
})

app.get('/randomCountry',  async(req, res, next) => {
    try{
        const countries = await Country.findAll({include: Details});
        let randomCountry = countries[Math.floor(Math.random()*countries.length)];
        res.send(randomCountry);
    }
    catch(ex){
        next(ex);
    }
})


const init = async() => {
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port: ${port}`));
    }
    catch(ex){
        console.log(ex);
    }
}
init();