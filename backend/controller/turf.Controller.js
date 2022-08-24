const Turf=require("../models/turf.Model")

exports.createturf=async(req,res)=>{
 try {
    const{turfname,owner,hoursopen}=req.body
    
    let turf=await Turf.findOne({turfname});
    if(turf){
     return res.status(400).json({success:false,message:'turf already regiter'})
    }
    turf=await Turf.create({turfname,owner,hoursopen})
res.status(201).json({success:true,turf})

}catch(error){
    res.status(500).json({
        success:false,
        message:error.message,
    })
}}
exports.updatebyadmin=async(req,res)=>{

    try{
        const turf=await Turf.findOneAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json({
            success:true,
            turf
        })
        } 
        catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            })
}
}