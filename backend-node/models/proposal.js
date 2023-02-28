const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')


const Proposal = db.define('proposals', {
    id: {
        type: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        
    },
    nameOfInstitution: {
        type: DataTypes.STRING
    },
    details: {
        type: DataTypes.STRING
    },
    images: {
        type: DataTypes.STRING
    }


});

db.sync({force: true})

module.exports = Proposal