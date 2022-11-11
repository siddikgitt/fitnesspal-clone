require("dotenv").config();
const mongoose=require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE,()=>{
        console.log("Database is connected.");
    })
}
module.exports=dbConnect;