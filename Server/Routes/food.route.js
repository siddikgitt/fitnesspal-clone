const express=require("express");
const { getAllFood,  UpdateFoodById, addFood } = require("../Controller/food.controller");
const app=express.Router();
const server_error=(e)=>{
    return {
        message:e.message,
        error:true
    }
}

// To get all food from database

app.get("/",async (req,res)=>{
    try {
        let response=await getAllFood();
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

// To get all food start with name written in query
// or 
// For debouncing purpose/ suggestion purpose

app.get("/search",async (req,res)=>{
    try {
        let {q}=req.query;
        let response=await searchFoodByQuery(q);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

// To post any food to database

app.post("/",async (req,res)=>{
    try {
        let data=req.body;
        let response=await addFood(data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

// To update any element of food in database by foodid

app.patch("/:id",async (req,res)=>{
    try {
        let id=req.params.id;
        let data=req.body;
        let response=await UpdateFoodById(id,data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})
module.exports=app;