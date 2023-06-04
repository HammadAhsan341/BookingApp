const User = require("../models/User")

// const createUser = async(req,res,next)=>{
//     const newuser = new User(req.body);
    
//     try{
//         const user = await newUser.save()
//         res.status(200).json(saveduser)
//     }catch(err){
//         next(err)
//     }
// }
const updateUser = async(req,res,next)=>{
    try{
        const updateduser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updateduser)
    }catch(err){
        res.status(500).json(err)
    }
}
const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
     res.status(200).json("user has been deleted")
 }catch(err){
     res.status(500).json(err)
 }
}
const getUser = async(req,res,next)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}
const getUsers = async(req,res,next)=>{
    try{
        const Users = await User.find();
        res.status(200).json(hotels)
    }catch(err){
        next(err);
    }
}


module.exports={
    
    // createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers
}
