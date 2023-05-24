const express = require("express");
const handlebars = require("express-handlebars");

module.exports =  handlebarsConfig = (server)=>{
    server.engine("hbs",handlebars.engine({extname:"hbs"}));
    server.set("view engine","hbs");
    server.set("views","src/views");
}