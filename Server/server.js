require("dotenv").config();
const express = require('express')
const app = express()
const dbConnect=require("./Utils/dbConnect");
const foodRouter=require("./Routes/food.route");
const foodDairyRouter=require("./Routes/foodDairy.route");
app.use(express.urlencoded({extended: true}))
app.use(express.json())
dbConnect();
app.use("/food",foodRouter);
app.use("/foodDairy",foodDairyRouter);
app.get('/', (req, res) => res.send('hello'))

app.listen(process.env.PORT, () => {console.log('server started on port 8000')})