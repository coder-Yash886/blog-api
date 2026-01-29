const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/',function(req,res){
    res.json({
        success: true,
        message: "Welcome to blog api"
    })
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})