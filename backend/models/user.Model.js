const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const crypto=require("crypto");
const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:[true,'Please Enter your name']
},
email:{
    type:String,
    required:[true,"Please Enter Email"],
    unique:[true,"Email already exists"]
},
password:{
    type:String,
required:[true,"Please Enter Password"],
select:false,
},
firstname:{type:String,
required:[true,"Mandatory to Enter First Name"],
},
lastname:{
    type:String,
    required:[true,"Mandatory to Enter last name"]
},
phone:{
    type:Number,
    required:[true,"Please Enter phone number"]
},
role:{
    type:String,
    enum:["superuser","user","merchant","admin"],
    default:"user"
},
resetPasswordToken:String,
resetPasswordExpire:Date,
})
userSchema.pre('save',async function(next){
    if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
}
next();

})

userSchema.methods.matchPassword =async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.getResetPasswordToken=function(){
    const resetToken =crypto.randomBytes(20).toString("hex")
    console.log(resetToken)
    this.resetPasswordToken=crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")
    this.resetPasswordExpire=Date.now()+10*60*1000
    return resetToken
    }
module.exports=mongoose.model('User',userSchema)