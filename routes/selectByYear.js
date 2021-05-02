const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(" am here at select API apigg");
    res.send({
        message: 'Hello Home Page testy'
    });
});

module.exports = router