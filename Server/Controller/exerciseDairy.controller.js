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
    let {date,type,id}=data;
    let exerciseDairy=await ExerciseDairy.find({Date:date});

    if(exerciseDairy.length>0){
        let exerciseArr=exerciseDairy[type].push(id);
        let exercise=await ExerciseDairy.updateOne({Date:date},{$set:{[type]:exerciseArr}})
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
const deleteExerciseDairy=async (date,type,id)=>{
    let exercise= await ExerciseDairy.find({Date:date});
    let exerciseArr=exercise[type].filter((el)=>el!==id)
    await ExerciseDairy.updateOne({Date:date},{$set:{[type]:exerciseArr}})
    return {
        message:"deleted",
        error:false
    }
}

module.exports={getExerciseDairyByDate,addExerciseDairy,deleteExerciseDairy}