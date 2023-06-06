const express = require("express");
const handlebars = require("express-handlebars");
const expressConfig = require("../config/expressConfig")
const handlebarsConfig = require("../config/handlebarsConfig")

const mongoose = require("mongoose");
const routes = require("./routes")

const server = express();

expressConfig(server);
handlebarsConfig(server);



server.use(routes);


async function connectDB(){
   await mongoose.connect("mongodb://127.0.0.1:27017/cubicle")
}
connectDB()

server.listen(5000,()=>console.log("Server is listening on port 5000..."))