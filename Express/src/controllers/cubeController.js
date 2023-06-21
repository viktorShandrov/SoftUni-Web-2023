const express = require("express");
const cubeManager = require("../managers/cubeManager");
const { isAuth, isCubeOwner } = require("../middlewares/authMiddleware");



const router = express.Router();

router.get("/create",isAuth,(req,res)=>{
    res.render("create");
})
router.post("/create",isAuth,async(req,res)=>{
    const {name,description,imageUrl,difficultyLevel} = req.body;
    const owner = req.user.id
    await cubeManager.create(name,description,imageUrl,difficultyLevel,owner)
    res.redirect("/")
})
router.get("/details/:_id",isCubeOwner, async(req,res)=>{
    try {
        const id = req.params._id;
        const cube = await cubeManager.getById(id).lean();
        if(!cube){
            res.redirect("/404")
        }else{
            res.render("details",{cube});
        }
        
    } catch (error) {
        console.log(error.message);
    }
})
router.get("/edit/:_id",isAuth,isCubeOwner,async(req,res)=>{
    if(res.isOwner){
        const cube = await cubeManager.getById(req.params._id);
        const options = cubeManager.showSelectedOption(cube.difficultyLevel)
        res.render("edit",{cube,options})
    }else{
        res.redirect("/404")
    }
})
router.post("/edit/:_id",isAuth,isCubeOwner,async(req,res)=>{
    if(res.isOwner){
    const {name, description ,imageUrl , difficultyLevel} = req.body;
    const id = req.params._id
    await cubeManager.update(id,name, description ,imageUrl , difficultyLevel)
    res.redirect("/")
    }else{
        res.redirect("/404")
    }
})
router.get("/delete/:_id",isAuth,isCubeOwner,async(req,res)=>{
    const cube = await cubeManager.getById(req.params._id);
    res.render("delete",cube)
})
router.post("/delete/:_id",isAuth,isCubeOwner,async(req,res)=>{
    await cubeManager.delete(req.params._id);
    res.redirect("/")
})

module.exports = router