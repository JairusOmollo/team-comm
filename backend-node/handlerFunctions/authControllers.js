const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



//create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'jairus secret', {
        expiresIn: maxAge
    });
};

//custom error
class AuthError extends Error {
    constructor(msg, statusCode = 500) {
        super(msg);

        this.error = msg;
        this.statusCode = statusCode;
    }
}


module.exports.signup_get = (req, res) => {
    res.render('/signup')
}
module.exports.signup_post = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, password });
        const token = createToken(user.user_id)
        res.cookie('jwt', token);
        res.status(200).json({
            user: user.user_id
        });
    }
    catch (err) {
        console.log(err.message)
    }
}
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } })
        if (user) {
            const auth = await bcrypt.compare(password, user.password);

            if (auth) {
                const token = createToken(user._id);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.json({user: user.user_id})

            } else{
                throw new AuthError('that email is not registered', 500)
            }
        } else {
          throw new AuthError('You wrote a wrong email address', 500)
        }
    } catch (error) {
        res.json(error)
    }
};
module.exports.login_get = (req, res) => {
    res.render('gets login form ')
}
module.exports.forgotpassword_get = (req, res) => {
    res.render('getsForgotPasswordForm')
}
module.exports.forgotpassword_post = (req, res) => {
    res.render('sends user email to change password')
}
