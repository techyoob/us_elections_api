const express = require('express');
const router = express.Router();
const presidential = require('../models/presidential.js');



router.get('/:year', (req, res) => {

    year = req.params.year;
    const PresidentialModel = presidential.PresidentialYearSchema(year)

    const presidentialYearDoc = new PresidentialModel({})

    console.log(" am here with model created?? at ", year);

    res.send('Animate by Year API');
});

module.exports = router