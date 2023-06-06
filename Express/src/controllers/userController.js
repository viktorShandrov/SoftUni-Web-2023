const router = require("express").Router();
const userManager = require("../managers/userManager")

router.get("/login",(req,res)=>{
    res.render("users/loginPage")
});
router.post("/login", async(req,res)=>{
    const {username,password}= req.body;
    const token = await userManager.login(username,password);
    res.cookie("user",token);
    res.redirect("/")
});


router.get("/register",(req,res)=>{
    res.render("users/registerPage")
});
router.post("/register",async(req,res)=>{
    const {username,password,repass}= req.body;
    userManager.register(username,password,repass);
    res.redirect("/users/login")
});


module.exports= router;