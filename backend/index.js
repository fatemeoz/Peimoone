const mongoose = require('mongoose');
const express = require('express');
const app = express();
const usersAPI = require('./routes/users');
const dotenv = require('dotenv');

dotenv.config();
// mongoose.connect(
//     process.env.DB_SERVER,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     () => console.log('connected to db'));

app.use('/users', usersAPI);

app.listen(5000, () => {
    console.log('backend running on port 5000');
});