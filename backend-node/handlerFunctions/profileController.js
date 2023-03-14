const Profile = require('../models/profile.js');

module.exports.create_profile = async (req, res) => {
try {
    const {
        nameOfSchool,
        nameOfHeadeTeacher,
        mobileNumber,
        emailAddress,
        nemisNumber,
        ward,
        typeOfSchool,
        schoolLevel,
        noOfBoys,
        noOfGirls,
        noOfChildren,
        noOfTeachers,
        noOfTSETeachers,
        NoOfBOMTeachers,
        teachersRequired,
        noOfClassRooms,
        classesRequired,
        noOfLaboratories,
        laboratoriesRequired,
        noOfBoysToiletsAvailable,
        boysToiletsRequired,
        noOfGirlsToiletsAvailable,
        girlsToiletsRequired
        


    } = req.body

const userId = req.userData.id
    const newProfile = await Profile.create({nameOfSchool,
        nameOfHeadeTeacher,
        mobileNumber,
        emailAddress,
        nemisNumber,
        ward,
        typeOfSchool,
        schoolLevel,
        noOfBoys,
        noOfGirls,
        noOfChildren,
        noOfTeachers,
        noOfTSETeachers,
        NoOfBOMTeachers,
        teachersRequired,
        noOfClassRooms,
        classesRequired,
        noOfLaboratories,
        laboratoriesRequired,
        noOfBoysToiletsAvailable,
        boysToiletsRequired,
        noOfGirlsToiletsAvailable,
        girlsToiletsRequired,
        userId
    
        


    })
    res.status(200)
    await res.json(newProfile)
} catch (error) {
    res.json(error)
}
};