const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.get('/',function(req,res){
    res.json({
        success: true,
        message: "Welcome to blog api"
    })
})

app.get('/about',function(req,res){
    res.json({
        success: true,
        message:"Jai Shree Kungbihariharidas",
        developer: "jai Shree Radha Rani"
    })
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})