const express = require("express");
const handlebars = require("express-handlebars");
const expressConfig = require("../config/expressConfig")
const handlebarsConfig = require("../config/handlebarsConfig")
const homeController = require("./controllers/homeController")
const server = express();

expressConfig(server);
handlebarsConfig(server);

server.use(homeController);


server.listen(5000,()=>console.log("Server is listening on port 5000..."))