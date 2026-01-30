const jwt = require("jsonwebtoken");
const User = require('../models/User');

const userlogedin = async function(req,res,next){
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1];
}

if(!token){
    return res.status(401).json({
        success: false,
        message: "You are not longed in"
    })
}
try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findOne(decoded.id);

    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "user not found"
        })
    }
    next();
} catch(error){
    return res.status(401).json({
        success: false,
        message: "Invalid Token"
    })
}

module.exports = {userlogedin}