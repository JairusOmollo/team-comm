const { Router } = require("express");
const authControllers = require('../handlerFunctions/authControllers')

const router = Router();

//Authentication routes

router.get('/signup', authControllers.signup_get);
router.post('/signup', authControllers.signup_post);
router.get('/login', authControllers.login_get);
router.post('/login', authControllers.login_post);
router.get('/forgotpassword', authControllers.forgotpassword_get);
router.post('/forgotpassword', authControllers.forgotpassword_post);

module.exports = router;
