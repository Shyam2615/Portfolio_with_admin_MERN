const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth_middleware = async (req, res, next) =>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({
            message:"Unauthorised HTTP, Token not provided"
        })
    }

    console.log(token);

    const jwtToken = token.replace("Bearer", "").trim();

    console.log(jwtToken);
    try{
        const isVerified =  jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        console.log(isVerified);

        const userData = await User.findOne({email:isVerified.email}).select({
            password:0,
        });

        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch(error){
        return res.status(401).json({
            message:"Unauthorised HTTP, Invalid token"
        })
    }
}

module.exports = auth_middleware;