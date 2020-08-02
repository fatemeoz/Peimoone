const router = require('express').Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const saltRounds = 11;
router.get('/', (req, res) => {
    res.send('users api');
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('Username doesnt exists');
    const validpass = await bcrypt.compare(req.body.password, user.password);
    if (!validpass) return res.status(400).send("Invalid password");
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).json({
        token : token,
        message : "Logged in"
    });
    
});

module.exports = router;