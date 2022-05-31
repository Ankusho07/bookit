// import mongoose from "mongoose";

const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true, 'please enter room name'],
    trim:true,
    maxLength:[100,'Room name cannot exceed 100 characters']
},
pricePerNight:{
    type:Number,
    required:[true, 'please enter room pricePerNight'],
    default:0.0,
    maxLength:[100,'Room name cannot exceed 4 characters']
},
description:{
    type:String,
    required:[true, 'please enter room description'],
    maxLength:[500,'Room name cannot exceed 500 characters']
},
address:{
    type:String,
    required:[true, 'please enter room address'],
},
guestCapacity:{
    type:Number,
    required:[true, 'please enter room capacity'],
},
numOfBeds:{
    type:Number,
    required:[true, 'please enter numbers of beds in room'],
},
internet:{
    type:Boolean,
    default:false,
},
breakfast:{
    type:Boolean,
    default:false,
},
airConditioned:{
    type:Boolean,
    default:false,
},
petsAllowed:{
    type:Boolean,
    default:false,
},
roomCleaning:{
    type:Boolean,
    default:false,
},
ratings:{
    type:Number,
    default:0,
},
numberOfReviews:{
    type:Number,
    default:0,
},
images:[
{
    public_id:{
        type:String,
        required:true   
     },
     url:{
        type:String,
        required:true   
     }
}

],
category:{
    type:String,
    required:[true,'please enter category'],
    enum:{
        values:[
            'King',
            'Single',
            'Twins'
        ],
        message:'Please select correct category for room'
    }
},
reviews :[
    {
        user:{
            type: mongoose.Schema.ObjectId,
            ref:'User',
            required: true
        },
        name:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
    }
],
user:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:false
},
createdAt:{
    type:Date,
    default:Date.now
}



})

//export default mongoose.models.Room || mongoose.model('Room', roomSchema)

module.exports=mongoose.models.Room || mongoose.model('Room', roomSchema)