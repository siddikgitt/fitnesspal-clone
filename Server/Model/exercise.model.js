const mongoose=require("mongoose");
const exerciseSchema=new mongoose.Schema({
    type:String,
    name:String,
    min:Number,
    calories:Number
})
const Exercise=mongoose.model("exercise",exerciseSchema);
module.exports=Exercise;