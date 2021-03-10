const mongoose = require('mongoose');



 const PresidentialYearSchema = (year) => {

    const PresidentialSchema  = new mongoose.Schema({
        candidate:String,
        vice_president:String,
        color:String,
        party:String,
        selected:String,
        electoral_votes:Number,
        popular_votes:Number,
        notes:String
    });
console.log(" am here inside PresidentialYearSchema at ", year);

    return mongoose.model(`Presidential_${year}`, PresidentialSchema);

}

exports.PresidentialYearSchema = PresidentialYearSchema
// module.export = PresidentialYearSchema