const { mongoose } = require("mongoose");



const schema = new mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String,
    difficultyLevel:String
})

const Cube = mongoose.model("Cube",schema)
module.exports = Cube