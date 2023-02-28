const { Router } = require("express");
const proposalController = require('../handlerFunctions/proposalController')
const router = Router();

//proposal routes

router.post('/create-proposal', proposalController.create_proposal_post);


module.exports = router;
