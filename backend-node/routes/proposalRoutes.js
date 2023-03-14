const { Router } = require("express");
const {requireAuth, checkUser } = require('../middleware/authMiddleware')
const  proposalController  = require('../handlerFunctions/proposalController');
const router = Router();

//proposal routes

router.post('/create-proposal', requireAuth, checkUser, proposalController.create_prop_post );


module.exports = router;
