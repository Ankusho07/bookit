

import Room from "../models/rooms";




const allRooms = async (req,res)=>{
   

try {

   const room = await Room.find()

    res.status(200).json({
        sucess:true,
        count:room.length,
        room
    })

    
} catch (error) {
    res.status(400).json({
        sucess:false,
        message:error.message
    })

}

}

    


  const newRoom = async (req,res)=>{
try{
    
        const room = await Room.create(req.body);
        
        res.status(200).json({
            success:true,
            room
        })
        
        
        
}catch(error){

    res.status(400).json({
        success:false,
        error:error.message
    })

}
}

const singleRoom =async (req,res)=>{

try {

const soloRoom = await Room.findById(req.query.id);   //in express we use req.params.id

res.status(200).json({
    success:true,
    room:soloRoom

})

    
} catch (error) {
    
res.status(400).json({
    success:false,
    error:error.message
})


}
}



export {
    allRooms,
    newRoom,
    singleRoom
}