const express = require("express");
const handlebars = require("express-handlebars");

const server = express();

server.listen(5000,()=>"Server is listening on port 5000...")