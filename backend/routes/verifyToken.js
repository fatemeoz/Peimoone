const jwt = require('jsonwebtoken')
 
function auth(req,res,next){
    const Token = req.header('auth-token')
    if (!Token) return res.status(401).send('dont have access')
    try{
        const varified = jwt.verify(Token,process.env.TOKEN_SECRET)
        req.user = varified;
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}
