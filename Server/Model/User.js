const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: String,
    password: String,
    dob: Date,
    goal: String,
    gender: String,
    height: String,
    currweight: String,
    goalweight: String,
    country: String,
    calories: String,
    daily_activity: String,
    workout_week: String,
    weekly_goal: String,
    signup_date: Date,
    
});

const UserModel = mongoose.model("fitnesspal", UserSchema)

module.exports = UserModel;