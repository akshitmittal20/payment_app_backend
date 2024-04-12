const dotenv = require('dotenv')
const express = require("express");
const rootRouter=require("./routes/index")
const bodyParser=require("body-parser")
const jwt=require("jsonwebtoken")
const app=express();
require("dotenv").config(); 
const Port=process.env.Port;
app.use(bodyParser.json());

const cors=require("cors");

app.use(cors())
//     {
//         origin:["https://payment-app-lyart.vercel.app/Signin"],
//         methods:["POST","GET","PUT"],
//         credentials: true
//     }
// ));

app.use("/api/v1",rootRouter)

app.listen(Port,()=>{
    console.log(`Server is listening at ${Port}`)
})
