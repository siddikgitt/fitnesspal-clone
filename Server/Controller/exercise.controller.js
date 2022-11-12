const Exercise = require("../Model/exercise.model");

const getAllExercise=async ()=>{
    let allExercise=await Exercise.find();
    return {
        message:allExercise,
        error:false
    }
}
const addExercise=async (data)=>{
    let isExercise=await Exercise.find();
    if(isExercise.length>0){
        return {
            message:"Already Exists.",
            error:false
        }
    }
    else{
        await Exercise.create(data);
        return {
            message:"success",
            error:false
    }
    }
}
// const searchExerciseByQuery=async (q)=>{
//     let allExercise=await Exercise.find({FoodDesExecription:{$regex:q}});
//     return {
//         message:allExercise,
//         error:false
//     }      
// }
const UpdateExerciseById=async (id,data)=>{
    await Exercise.updateOne({_id:id},{$set:data})
    return {
        message:"success",
        error:false
    }
}

module.exports={getAllExercise, addExercise, searchExerciseByQuery, UpdateExerciseById}