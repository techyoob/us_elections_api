const mongoose = require('mongoose');



 const PresidentialYearSchema = (year) => {
    mongoose.models = {}

    const PresidentialSchema  = new mongoose.Schema({
        candidate:String,
        vice_president:String,
        color:String,
        party:String,
        selected:String,
        electoral_votes:String,
        popular_votes:String,
        notes:String
    });

    return mongoose.model(`Presidential_${year}`, PresidentialSchema, `presidential_${year}`);

}

// exports.PresidentialYearSchema = PresidentialYearSchema
module.export = PresidentialYearSchema