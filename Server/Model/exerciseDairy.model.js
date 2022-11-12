const mongoose=require("mongoose");
const exerciseDairySchema=new mongoose.Schema({
  Date:String,
  User:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
  Exercise:[{type:mongoose.Schema.Types.ObjectId,ref:"exercise"}]
})
const ExerciseDairy= mongoose.model("exerciseDairy",exerciseDairySchema);
module.exports=ExerciseDairy;