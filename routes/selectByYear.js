const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Select by Year APi');
});

module.exports = router