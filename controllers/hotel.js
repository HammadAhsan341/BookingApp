const Hotels = require("../models/Hotels")

const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body);
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}
const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}
const deleteHotel = async(req,res,next)=>{
    try{
        await Hotels.findByIdAndDelete(req.params.id);
     res.status(200).json("Hotel has been deleted")
 }catch(err){
     res.status(500).json(err)
 }
}
const getHotel = async(req,res,next)=>{
    try{
        const Hotel = await Hotels.findByIdAndUpdate(req.params.id)
        res.status(200).json(Hotel)
    }catch(err){
        res.status(500).json(err)
    }
}
const getHotels = async(req,res,next)=>{
    try{
        const hotels = await Hotels.find();
        res.status(200).json(hotels)
    }catch(err){
        next(err);
    }
}


module.exports={
    
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel ,
    getHotels
}
