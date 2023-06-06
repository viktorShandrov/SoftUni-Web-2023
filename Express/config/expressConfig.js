const express = require("express");
const handlebars = require("express-handlebars");
const bodyparser = require('body-parser')

module.exports = handlebarsConfig = (server)=>{
    server.use(express.static("src/public"))
    server.use(bodyparser.urlencoded({ extended: true }))
    server.use(bodyparser.json())
}