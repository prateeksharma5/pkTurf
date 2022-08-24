const express=require("express")

const{createturf,updatebyadmin} =require("../controller/turf.Controller")

const{isAdmin,isMerchant}=require("../middlewares/auth")

const router=express.Router();

router.route("/turfcreate").post(isMerchant,createturf)

router.route("/update/:id").put(isAdmin,updatebyadmin)

module.exports=router;