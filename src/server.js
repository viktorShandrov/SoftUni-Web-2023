const express = require("express");
const handlebars = require("express-handlebars");
const expressConfig = require("../config/expressConfig")

const server = express();

expressConfig(server);
handlebarsConfig(server);


server.listen(5000,()=>"Server is listening on port 5000...")