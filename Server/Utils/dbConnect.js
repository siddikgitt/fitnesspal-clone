require("dotenv").config();
const mongoose=require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE,(e)=>{
        console.log(e);
        console.log("Database is connected.");
    })
}
module.exports=dbConnect;