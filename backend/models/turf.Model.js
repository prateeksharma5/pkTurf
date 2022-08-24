const mongoose=require("mongoose");
const turfSchema=new mongoose.Schema(
      {
        turfname:{
            type:String,
            required:[true,"please enter turf name"],
            unique:true,
        },
        owner: [{
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        }],
        sports:[
            {
                type:String,
                enum:["cricket","football","basketball","volleyball"],
            }
        ],
        playground:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"playground",
            }
        ],
        status:[
            {
                type: Boolean,
            }
        ],
        availabledates:[
            {
                type:Date,
            }
        ],
        managers:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            }
        ],
        hoursopen:{
            type:String,
            required:[true,"working hour must be defined"]
        },
        location:{
            type:mongoose.Schema.Types.ObjectId,
        },
        bookings:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"booking"

        }
      },
)
module.exports=mongoose.model('Turf',turfSchema)