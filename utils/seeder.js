//import Room from "../models/rooms";   // y Room model hai jo schema me banaya tha 
const Room = require('../models/rooms')
// we use require syntax with NODE

//import mongoose from "mongoose";
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bookit', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(con => console.log("connected to database")).catch(err=>console.log(err))


//import dbConnect  from "../config/dbConnect";
//const dbConnect = require('../config/dbConnect')

//import rooms from '../data/rooms.json'
const rooms = require('../data/rooms.json')


const seedRooms = async ()=>{


try {
    
await Room.deleteMany();
console.log('Rooms are deleted')

await Room.insertMany(rooms);
console.log('All Rooms are added.')

} catch (error) {
    console.log(error.message);
    process.exit()
}

}

seedRooms()