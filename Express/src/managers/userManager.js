const bcrypt = require("bcrypt")
const {User} = require("../models/user");
const jwt = require("../lib/jwt");
const { mongoose } = require("mongoose");


exports.register = function(username,password,repass){
    User.create({username,password,repass})
}
exports.login = async function(username,password){
    const user = await User.findOne({username}).lean()
    if(!user){
        throw new mongoose.MongooseError("No such username")
    }
    const isValid = await bcrypt.compare(password,user.password);
    if(!isValid){
        throw new mongoose.MongooseError("Wrong password")
    }
    const payload = {
        id:user._id,
        username:user.username
    }
    const secret = "MYSECRET"
    const token = await jwt.sign(payload,secret)
    return token
}
