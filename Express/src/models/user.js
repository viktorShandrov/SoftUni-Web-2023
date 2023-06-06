const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const schema = new mongoose.Schema({
    username:String,
    password:String
});

schema.virtual("repass").set(function(value){
    if(this.password!==value){
        throw new mongoose.MongooseError("Passwords mismatch");
    }
})
schema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,5);
})
module.exports = mongoose.model("User",schema)