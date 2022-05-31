

//first install mongo db

import mongoose from 'mongoose';
const dbConnect = ()=>{
    if(mongoose.connection.readyState>=1){
        return
    }
// this file is written in next.config.js file
    mongoose.connect('mongodb://localhost:27017/bookit', {useNewUrlParser: true, useUnifiedTopology: true}).then(con => console.log("connected to database")).catch(err=>console.log(err))
}


 export default dbConnect



