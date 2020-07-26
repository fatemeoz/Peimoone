const mongoose = require('mongoose');
const express = require('express');
const app = express();
const usersAPI = require('./routes/users');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
dotenv.config();
mongoose.connect(
    process.env.DB_SERVER,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Connected to db")
        }
    });
app.use(bodyParser.json())
app.use('/users', usersAPI);

app.listen(5000, () => {
    console.log('backend running on port 5000');
});