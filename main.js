

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();


const animateByColorRoute = require("./routes/animateByColor");
const animateRoute = require("./routes/animateByYear");
const selectRoute = require("./routes/selectByYear");
const chartRoute = require("./routes/chartsByYear");


 

// Middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());
// app.use(bodyParser.json())

app.use('/animate', animateRoute);
app.use('/animateByColor', animateByColorRoute);
app.use('/select', selectRoute);
app.use('/charts', chartRoute);


// home routes
app.get('/', (req, res) => {
    res.send('OKKKK');
});


// connect to database 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" connected to database ")
)


app.listen(5000)