const express=require('express');
//const { updateProfile } = require('../controller/admin.Controller');
const{register,loginUser,updateRole,getUser, updateProfile, deleteProfile, myProfile, getAllUsers,forgotPassword,resetPassword}=require('../controller/user.Controller')

const{isAuthenticated,isAdmin,isMerchant}=require('../middlewares/auth');
const router=express.Router();
router.route('/register').post(register)
router.route('/loginuser').post(loginUser)
router.route('/updateRole').put(updateRole)
router.route("/updateprofile/:id").put(updateProfile)
router.route("/loginAdmin").post(isAuthenticated,isAdmin,getUser)
router.route("/loginMerchant").post(isMerchant,getUser)
router.route("/deleteprofile/:id").delete(deleteProfile)
router.route("/myprofile/:id").get(myProfile)
router.route('/getalluser').get(getAllUsers)
router.route("/forgot/password").post(forgotPassword)
router.route("/password/reset/:id").put(resetPassword)
module.exports=router;




