const User = require("../models/user-model")
const bcrypt = require("bcryptjs")

const home = async (req, res)=>{
    try {
        res.status(200).send("Welcome to home (Controller)");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res)=>{
    try {
        const {username, email, phone, password} = req.body

        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({
                "message": "Email already exists"
            });
        }

        // const salt = 10;
        // const hash_password = await bcrypt.hash(password, salt);

        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({
            "Message": "User registered Successfully", 
            "token": await userCreated.generateToken(),
            "userId" : userCreated._id.toString(),
        });
    } catch (error) {
        // console.log(error);
        next(error);
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(401).json({
                "Error": "Invalid email",
            })
        }

        const user = await bcrypt.compare(password, userExists.password);
        //Because userExists returns the full object of the data found

        if(user){
            res.status(200).json({
                "Message": "Loggedin Successfully", 
                "token": await userExists.generateToken(),
                "userId" : userExists._id.toString(),
            });
        }else{
            res.status(401).json({
                "message": "Invalid password"});
        }

    } catch (error) {
        // res.status(401).json({
        //     "Error":"Internal server error",
        // })
        next(error);
    }
}

const User_data = (req, res)=>{
    const userData = req.user;
    try {
        res.status(200).json({
            userData
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {home, register, login, User_data};