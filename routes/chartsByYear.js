const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Charts by Year API');
});

module.exports = router