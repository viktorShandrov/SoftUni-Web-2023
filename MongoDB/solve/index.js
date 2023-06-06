const mongoose = require("mongoose");
const User = require("./user");
const { log } = require("console");
async function connectDB(){
    mongoose.connect("mongodb://127.0.0.1:27017/cubicle");
    await User.create({name:"Spas",age:10})
    log(await User.find())
}
connectDB()
