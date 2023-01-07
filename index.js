const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(bodyParser.json)

//connection 
mongoose.connect(process.env.MONGO_URI)
    .then(() => { })


app.get('/home', (req, res) => {
    res.send("Home Page");
})

app.listen(PORT, () => {
    console.log(`Server Running on Port : ${PORT}`)
})