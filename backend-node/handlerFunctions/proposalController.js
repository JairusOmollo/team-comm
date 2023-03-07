const proposal = require('../models/proposal.js')

module.exports.create_prop_post = async (req, res) => {
    try {
        const { title, nameOfInstitution, details } = req.body

        const newProposal = await proposal.create({ title, nameOfInstitution, details })
       await  res.json(newProposal)
    } catch (error) {
       res.send(error)
    }
}