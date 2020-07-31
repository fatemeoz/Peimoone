const mongoose = require('mongoose');
const express = require('express');
const app = express();
const usersAPI = require('./routes/users');
const api = require('./routes/api');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
mongoose.connect(
    process.env.DB_SERVER,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db')
);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/users', usersAPI);
app.use('/api', api);

app.listen(5000, () => {
    console.log('backend running on port 5000');
});