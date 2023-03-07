
const {  DataTypes, UUIDV4 } = require('sequelize');
const db = require('../config/database')



const Proposal =  db.define('proposals', {
    id: {
        type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
        primaryKey: true
        
    },
    title: {
        type: DataTypes.STRING
    },
    nameOfInstitution: {
        type:DataTypes.STRING
    }
});
db.sync({force: true}) ;
    

module.exports = Proposal