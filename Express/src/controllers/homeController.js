const express = require("express");
const cubeManager = require("../managers/cubeManager")

const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        const cubes = await cubeManager.getAll()?.lean();
        cubes.forEach(cube => {
            cube._id=cube._id.toString()
        });

        res.render("home",{cubes});
    }catch(error){
        console.log(error.message);
    }
})
router.get("/about",(req,res)=>{
    res.render("about");
})
router.get("/404",(req,res)=>{
    res.render("404");
})


module.exports = router