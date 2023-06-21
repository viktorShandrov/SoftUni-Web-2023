const jwt = require("../lib/jwt")
const Cube = require("../models/cube")
const cubeManager = require("../managers/cubeManager");

const secret = "MYSECRET"
exports.secret = secret
exports.auth= async(req,res,next)=>{
    const token = req.cookies['user']
    if(token){
        try{
            const user = await jwt.verify(token,secret)
            req.user = user;
            res.locals.isAuthenticated = true;
            next()
        }
        catch(error){
            res.clearCookie["user"]
            res.redirect("/users/login")
        }
    }else{
        next()
    }
}

exports.isAuth= (req,res,next)=>{
    if(!req.user){
        res.redirect("/users/login")
    }else{
        next();
    }
}
exports.isCubeOwner= async(req,res,next)=>{
    if(req.user){
        const cube = await cubeManager.getById(req.params._id).lean();
        if(cube.owner.toString()==req.user.id){
            res.locals.isOwner=true
        }
    }
    next();
}