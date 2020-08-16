const router = require('express').Router();
const Post = require('../models/Post');
const { sign_s3 } = require('../utils/aws');
const { auth } = require('./verifyToken');

router.post('/save-post', auth, async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedUser = await newPost.save();
        res.send(savedUser);
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/signed-file-url', sign_s3);

module.exports = router;