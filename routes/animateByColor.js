const express = require('express');
const router = express.Router();
const presidential = require('../models/presidential.js');
const electionConfig = require('../data/election_schema.json')


router.get('/', async  (req, res) => {

    try { 


        // const year = req.params.year;

        // console.log(" Year  ", year, " and data is ", data);



        // const year = req.params.year;
        // const PresidentialModel = presidential.PresidentialYearSchema(year)
        // const data = await PresidentialModel.find()
        // const presidentialYearDoc = new PresidentialModel({})

        // console.log(" Year  ", year, " and data is ", data);



        for (year of electionConfig.years) {

            const PresidentialModel = presidential(year)
            const data = await PresidentialModel.find()
            console.log(" for year ", year, "  data is ", data);
        }

        
        res.send("done");
        
    } catch(err) {
        console.log(" error is ", err);
    }


});

module.exports = router