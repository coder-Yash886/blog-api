const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
      return jwt.sign(
        {id: userId},
        process.env.JWT_SECRET,
        {expiresIn: '15d'}
      );
};

const register = async function(req,res){
    try{
        const {name, email, password} = req.body;
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                success: false,
                message: "You are already signup"
            })
        }
        const user = await User.create({
        name,
        email,
        password
    })

    const token = generateToken(user._id);
    res.status(201).json({
        success: true,
        message: "You are signup successfully",
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
            token
        }
    })

    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
};
const login = async function(req,res){
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please provide  email and password"
            })
        }

        const user = await User.findOne({email}).select("password")
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid email and password"
            })
        }

        const isPasswordRight = await user.comparePassword(password);
        if(!isPasswordRight){
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const token = generateToken(user._id);
        res.status(200).json({
            success: true,
            message: "Login Successsful",
            data:{
                id: user._id,
                name: user.name,
                email: user.email,
                token
            }
        })

    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


module.exports = {
    register,
    login
    
}