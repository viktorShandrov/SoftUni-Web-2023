const express = require("express");
const cubeManager = require("../managers/cubeManager");



const router = express.Router();

router.get("/create",(req,res)=>{
    res.render("create");
})
router.post("/create",(req,res)=>{
    const {name,description,imageUrl,difficultyLevel} = req.body;
    cubeManager.create(name,description,imageUrl,difficultyLevel)
    res.redirect("/")
})
router.get("/details/:id", async(req,res)=>{
    const id = req.params.id;
    const cube = await cubeManager.getById(id);
    if(!cube){
        res.redirect("/404")
    }else{
        res.render("details",{cube});
    }
})
router.get("/edit/:id",async(req,res)=>{
    const cube = await cubeManager.getById(req.params.id);
    const options = cubeManager.showSelectedOption(cube.difficultyLevel)
    res.render("edit",{cube,options})
})
router.post("/edit/:id",async(req,res)=>{
    const {name, description ,imageUrl , difficultyLevel} = req.body;
    const id = req.params.id
    await cubeManager.update(id,name, description ,imageUrl , difficultyLevel)
    res.redirect("/")
})

module.exports = router