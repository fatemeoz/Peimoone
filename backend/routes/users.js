const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('users api');
});

module.exports = router;