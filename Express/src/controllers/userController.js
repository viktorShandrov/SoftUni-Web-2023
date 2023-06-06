const router = require("express").Router();


router.get("/login",(req,res)=>{
    res.render("users/loginPage")
});


module.exports= router;