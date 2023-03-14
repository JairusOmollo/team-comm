const jwt = require('jsonwebtoken');
const { JSON } = require('sequelize');
const User = require('../models/user')

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    //check json web token exist and verified
    if (token) {
        jwt.verify(token, 'jairus secret', async (err, decodedToken) => {
            const token = req.cookies.jwt
            console.log(token, '-------token in requireAuth------')
            if (token) {
                if (err) {
                    res.json({ error: 'send user to login' })

                } else {
                    console.log(decodedToken, "-----------token found go to check current user------------")
                    next()
                }

            } else {
                res.json({ error: 'send user to login no tokrn found' })
            }

        })

    } else {
        res.json({ error: 'user not loggged in 2' })

    }
}

//check current user

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, 'jairus secret', async (err, decodedToken) => {
            if (err) {
                res.userData = null
                next()
            } else {
                User.findOne({where: {id: decodedToken.id}}).then(user => {
                   req.userData = user
                   next()
                }
                    
                ).catch(error => console.log(error))
            }
        })
    } else {
        req.userData = null
        next()

    }

}

module.exports = { requireAuth, checkUser }