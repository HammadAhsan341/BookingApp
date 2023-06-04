const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute= require("./routes/auth")
const hotelsRoute= require("./routes/hotels")
const roomsRoute= require("./routes/rooms")
const usersRoute= require("./routes/users")
const cookieParser = require("cookie-parser");
mongoose.connect('mongodb://localhost:27017/Booking',
    {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log('MongoDB Connected...'))

    .catch((err) => console.log(err))

//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
return res.status(500).json({
    success: false,
    status : errorStatus,
    message:errorMessage,
    stack: err.stack,
});

})

app.listen(5000,()=>{
    console.log("Backend Connected")
})