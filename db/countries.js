const Sequelize = require('sequelize');
const { STRING } = require('sequelize')
const db = require('./db')

const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Country = db.define('country', {
    id:{
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
    }, 
})

module.exports = Country;