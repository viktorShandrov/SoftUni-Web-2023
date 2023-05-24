const express = require("express");
const cubes = require("../database").cubes;

const router = express.Router();

router.get("/create",(req,res)=>{
    res.render("home");
})
router.get("/details/:id",(req,res)=>{
    const id = req.params.id;
    const cube = cubes.find(cube=>cube.id==id);
    if(!cube){
        res.redirect("/404")
    }
    res.render("details",{cube});
})

module.exports = router