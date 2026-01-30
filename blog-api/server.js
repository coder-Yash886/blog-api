const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/posts',postRoutes)




const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})