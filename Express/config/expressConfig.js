const express = require("express");
const handlebars = require("express-handlebars");
const bodyparser = require('body-parser');
const { auth } = require("../src/middlewares/authMiddleware");
const cookieParser = require("cookie-parser");

module.exports = expressConfig = (server)=>{
    server.use(express.static("src/public"))
    server.use(bodyparser.urlencoded({ extended: false }))
    server.use(bodyparser.json())
    server.use(cookieParser())
    server.use(auth)
}