const { STRING } = require('sequelize')
const db = require('./db')

const Details = db.define('details', {
    capitalCity: {
        type: STRING,
    },
    continent: {
        type: STRING,
    } 
})

module.exports = Details;