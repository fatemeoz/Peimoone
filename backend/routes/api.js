const router = require('express').Router();
const Post = require('../models/Post');

router.post('/save-post', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedUser = await newPost.save();
        res.send(savedUser);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;