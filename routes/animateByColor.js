const express = require('express');
const router = express.Router();
const presidential = require('../models/presidential.js');
const electoral = require('../models/electoral.js');
const electionConfig = require('../data/election_schema.json');


router.get('/', async  (req, res) => {

    try { 

        const result = [];
        for ( year of electionConfig.years ) {

            
            const ElectoralCollection = electoral(year)

            const data = await ElectoralCollection.aggregate([
                { $project : { _id : 0, winner: 1, state: 1} }
              ])

            const item = {
                year:year,
                states:data
            }

            result.push(item)
        }

        
        res.send(result);
        
    } catch(err) {
        console.log(" error is ", err);
    }


});

module.exports = router