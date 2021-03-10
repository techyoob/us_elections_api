

const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const animateRoute = require("./routes/animateByYear");
const selectRoute = require("./routes/selectByYear");
const chartRoute = require("./routes/chartsByYear");




// Middlewares
app.use(bodyParser.json())

app.use('/animate', animateRoute);
app.use('/select', selectRoute);
app.use('/charts', chartRoute);


// home routes
app.get('/', (req, res) => {
    res.send('Hello world');
});


// connect to database 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=> console.log(" connected to database ")
)


app.listen(3000)