const mongoose = require('mongoose');



 const TestySchema = () => {
    mongoose.models = {}
    const Testy  = new mongoose.Schema({
        name:String,
        position:String
    });

    return mongoose.model(`Testy_coll`, Testy, 'testy_coll');

}

module.exports = TestySchema
// module.export = PresidentialYearSchema