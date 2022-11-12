const jwt=require("jsonwebtoken");
const ExerciseDairy = require("../Model/exerciseDairy.model");
const getExerciseDairyByDate=async (date)=>{
    let data=await ExerciseDairy.find({Date:date});
    return {
        message:data,
        error:false
    }
}
const addExerciseDairy=async (data)=>{
    let date=data.Date;
    let exerciseDairy=await ExerciseDairy.find({Date:date});
    if(exerciseDairy.length>0){
        //  Require Correction
     let exercise=await ExerciseDairy.updateOne({Date:date},{$set:data});
     return {
        message:exercise,
        error:false
    }
    }
    else{
        // let user=jwt.verify(token,process.env.SECRET_KEY)
        let exercise=await ExerciseDairy.create(data);
        // food["User"]=user._id;
        // food.save();
        return {
            message:exercise,
            error:false
        }
    }
}
const deleteExerciseDairy=async (id)=>{
    // Require Correction
    await ExerciseDairy.findByIdAndRemove(id);
    return {
        message:"deleted",
        error:false
    }
}

module.exports={getExerciseDairyByDate,addExerciseDairy,deleteExerciseDairy}