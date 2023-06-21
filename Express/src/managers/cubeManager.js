const Cube = require("../models/cube")


exports.create=  function(name,description,imageUrl,difficultyLevel,owner){
    return Cube.create({name,description,imageUrl,difficultyLevel,owner})
}
exports.getAll= function(){
    return Cube.find();
}
exports.getById= function(id){
    return Cube.findById(id);
}
exports.showSelectedOption= function(level){
    const options = [
        { value: "1", label: "1 - Very Easy" },
        { value: "2", label: "2 - Easy" },
        { value: "3", label: "3 - Medium (Standard 3x3)" },
        { value: "4", label: "4 - Intermediate" },
        { value: "5", label: "5 - Expert" },
        { value: "6", label: "6 - Hardcore" },
      ];
       options[options.findIndex(el=>el.value==level)].selected = true
       return options
}
exports.update =function (id,name, description ,imageUrl , difficultyLevel){
    return Cube.findByIdAndUpdate(id,{name, description ,imageUrl , difficultyLevel})
}
exports.delete = function(id){
    return Cube.findByIdAndDelete(id);
}