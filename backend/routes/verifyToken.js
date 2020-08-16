const jwt = require('jsonwebtoken');
const { STATUS } = require('../consts');

function auth(req, res, next) {
    const Token = req.header('auth-token')
    if (!Token) {
        return res.status(401).json({
            message: 'No access',
            status: STATUS.unauthorized
        });
    }
    try {
        const varified = jwt.verify(Token, process.env.TOKEN_SECRET);
        req.user = varified;
        next();
    }
    catch (err) {
        console.log('not verified');
        res.status(400).json({
            message: 'Invalid Token',
            status: STATUS.unauthorized
        });
    }
}

module.exports = { auth }