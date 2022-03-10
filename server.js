const Sequelize = require('sequelize');
const { syncAndSeed } = require('./db');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/reactwebpack');

const init = async() => {
    try{
        syncAndSeed
    }
    catch(ex){
        console.log(ex);
    }
}
init();