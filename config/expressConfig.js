const express = require("express");
const handlebars = require("express-handlebars");

module.exports = handlebarsConfig = (server)=>{
    server.use(express.static("src/public"))
}