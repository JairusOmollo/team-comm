const { Sequelize, DataTypes, STRING, UUIDV4 } = require('sequelize');
const bcrypt = require('bcrypt')
const db = require('../config/database');


const User = db.define('allUsers', {
    user_id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
        primaryKey: true,
        
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                len:[2,30],
                msg: 'Please enter your last name'
            }
        }

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
                notNull: {
                    len:[5,30],
                    msg: 'Please enter an email address'
                }
            }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                len: [5, 25],
                msg: 'Minimum password is 6 characters'
            }
        }
    }   
 });

 User.beforeCreate(async (user) => {

    try {
         const hash = await bcrypt.hash(user.password, 10);
         user.password = hash;
     } catch (err) {
         throw new Error();
     }
});


db.sync()

module.exports = User;