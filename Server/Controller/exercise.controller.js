const Exercise = require("../Model/exercise.model");

const getAllExercise=async ()=>{
    let allExercise=await Exercise.find();
    return {
        message:allExercise,
        error:false
    }
}
const addExercise=async (data)=>{
    //    console.log(data)
       let exercise= await Exercise.create(data);
    
        return {
            message:exercise,
            error:false
    }
   
}
const searchExerciseByQuery=async (q)=>{
    console.log(q)
    let exercise=await Exercise.find({name:{$regex:q}});
    return {
        message:exercise,
        error:false
    }      
}
const UpdateExerciseById=async (id,data)=>{
    await Exercise.updateOne({_id:id},{$set:data})
    return {
        message:"success",
        error:false
    }
}

module.exports={getAllExercise, addExercise, UpdateExerciseById,searchExerciseByQuery}