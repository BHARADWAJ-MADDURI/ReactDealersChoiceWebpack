const Sequelize = require('sequelize');
const { STRING} = require('sequelize')
const db = require('./db')

const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Details = db.define('details', {
    id:{
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    capitalCity: {
        type: STRING,
    },
    continent: {
        type: STRING,
    } 
})

module.exports = Details;