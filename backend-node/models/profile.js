const { DataTypes, UUIDV4 } = require('sequelize');
const db = require('../config/database')
const User = require('./user')


const Profile = db.define('profiles', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nameOfSchool: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nameOfHeadTeacher: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mobileNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nemisNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ward: {
        type: DataTypes.STRING,
        allowNull: true
    },
    typeOfSchool: {
        type: DataTypes.STRING,
        allowNull: true
    },
    schoolLevel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noOfBoys: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    noOfGirls: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    noOfChildren: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    noOfTeachers: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noOfTSETeachers: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    noOfBOMTeachers: {
        type: DataTypes.STRING,
        allowNull: true
    },
    teachersRequired: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noOfClassRooms: {
        type: DataTypes.STRING,
        allowNull: true
    },
    classesRequired: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noOfLaboratories: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    laboratoriesRequired: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    noOfBoysToiletsAvailable: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    boysToiletsRequired: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    noOfGirlsToiletsAvailable: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    girlsToiletsRequired: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
User.hasOne(Profile, {
    foreignKey: {
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
    }
});
Profile.belongsTo(User)
db.sync()

module.exports = Profile