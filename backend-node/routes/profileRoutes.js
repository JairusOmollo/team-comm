const { Router } = require("express");

const { requireAuth, checkUser } = require('../middleware/authMiddleware')
const  profileController  = require('../handlerFunctions/profileController');
const cookieParser = require("cookie-parser");

const router = Router();
router.use(cookieParser())
//profile routes

router.post('/create_profile', requireAuth, checkUser, profileController.create_profile);

module.exports = router;