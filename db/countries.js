const { STRING } = require('sequelize')
const db = require('./db')

const Country = db.define('country', {
    name: {
        type: STRING,
    }, 
})

module.exports = Country;