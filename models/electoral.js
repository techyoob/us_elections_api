const mongoose = require('mongoose');



 const ElectoralYearSchema = (year) => {
    mongoose.models = {}
    const ElectoralSchema  = new mongoose.Schema({
        state:String,
        electoral_votes_0:String,
        electoral_votes_1:String,
        electoral_votes_3:String,
        electoral_votes_4:String,
        electoral_votes_5:String,
        popular_votes_0:String,
        popular_votes_1:String,
        popular_votes_2:String,
        popular_votes_3:String,
        popular_votes_4:String,
        popular_votes_5:String,
        total_electorals:String,
        total_votes:String,
        winner:{
            party:String,
            candidate:String,
            color:String,
        }
    });

    return mongoose.model(`State_Electoral_${year}`, ElectoralSchema, `state_electoral_${year}`);

}


module.exports = ElectoralYearSchema