const mongoose=require("mongoose");
const exerciseSchema=new mongoose.Schema({
    Type:String,
    Name:String,
    Duration:String,
    CalorieBurned:String
})
const Exercise=mongoose.model("exercise",exerciseSchema);
module.exports=Exercise;