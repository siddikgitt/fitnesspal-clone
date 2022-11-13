const express=require("express");
const { getAllExercise, addExercise, UpdateExerciseById, searchExerciseByQuery } = require("../Controller/exercise.controller");
const app=express.Router();
const server_error=(e)=>{
    return {
        message:e.message,
        error:true
    }
}

// To get all exercise from database

app.get("/",async (req,res)=>{
    try {
        let response=await getAllExercise();
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})



// To get all exercise start with name written in query
// or 
// For debouncing purpose/ suggestion purpose

app.get("/search",async (req,res)=>{
    try {
        let {q}=req.query;
        let response=await searchExerciseByQuery(q);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

// To post any Exercise to database

app.post("/",async (req,res)=>{
    try {
        let data=req.body;
        let response=await addExercise(data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

// To update any element of Exercise in database by Exerciseid

app.patch("/:id",async (req,res)=>{
    try {
        let id=req.params.id;
        let data=req.body;
        let response=await UpdateExerciseById(id,data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})
module.exports=app;