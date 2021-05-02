const express = require('express');
const router = express.Router();
const presidential = require('../models/presidential.js');
const TestySchema = require('../models/testy.js');



router.get('/:year', async  (req, res) => {

    try { 

        const testymodel = TestySchema()

        const year = req.params.year;
        const data = await testymodel.find()


        console.log(" Year  ", year, " and data is ", data);



        // const year = req.params.year;
        // const PresidentialModel = presidential.PresidentialYearSchema(year)
        // const data = await PresidentialModel.find()
        // const presidentialYearDoc = new PresidentialModel({})

        // console.log(" Year  ", year, " and data is ", data);

        res.send(data);
    } catch(err) {
        console.log(" error is ", err);
    }


});

module.exports = router