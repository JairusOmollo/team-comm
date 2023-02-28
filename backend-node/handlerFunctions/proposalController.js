const Proposal = require('../models/proposal')

module.exports.create_proposal_post = async (req, res)=> {
    try {
        const { title , nameOfInstitution, details, images } = req.body;
        
        const newProposal = await Proposal.create({ title, nameOfInstitution, details, images});

        if (newProposal) {
           res.json({proposal: newProposal.id});
        } else {
            res.send('post not created')
        }
    } catch (error) {
        throw new Error('no post made')
    }

    

}