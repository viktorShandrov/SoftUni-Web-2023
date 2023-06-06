const express = require("express");
const cubeManager = require("../managers/cubeManager")

const router = express.Router();

router.get("/",async (req,res)=>{
    const cubes = await cubeManager.getAll()
    res.render("home",{cubes});
})
router.get("/about",(req,res)=>{
    res.render("about");
})
router.get("/404",(req,res)=>{
    res.render("404");
})


module.exports = router