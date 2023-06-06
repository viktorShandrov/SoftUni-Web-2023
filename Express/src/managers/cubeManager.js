const Cube = require("../models/cube")


exports.create=  function(name,description,imageUrl,difficultyLevel){
     Cube.create({name,description,imageUrl,difficultyLevel})
}
exports.getAll= function(){
    return Cube.find().lean();
}
exports.getById= function(id){
    return Cube.findById(id).lean();
}