

import Room from "../models/rooms";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from '../utils/apiFeatures'



// const allRooms = async (req,res)=>{
   

// try {

//    const room = await Room.find()

//     res.status(200).json({
//         sucess:true,
//         count:room.length,
//         room
//     })

    
// } catch (error) {
//     res.status(400).json({
//         sucess:false,
//         message:error.message
//     })

// }

// }



const allRooms = catchAsyncErrors( async (req,res)=>{
   //search by location implementation
   
const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter()  //req.query will contain the parametrs of url
   

    
       //const room = await Room.find()
    
       const rooms = await apiFeatures.query;
        res.status(200).json({
            sucess:true,
            count:rooms.length,
            rooms
        })
    
        
   
    
    })
    
    


  const newRoom =catchAsyncErrors( async (req,res)=>{

    
        const room = await Room.create(req.body);
        
        res.status(200).json({
            success:true,
            room
        })
        
        
        


})

const singleRoom =async (req,res, next)=>{  //next is kind of middleware

try {

const soloRoom = await Room.findById(req.query.id);   //in express we use req.params.id
if(!soloRoom){
    // return res.status(404).json({
    //     success:false,
    //     message:'room not found with this id'
    // })


    return next(new ErrorHandler('room not found with this id',404))
}

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



const updateRoom =async (req,res,next)=>{

    try {
    
    let updatedRoom = await Room.findByIdAndUpdate(req.query.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });   //in express we use req.params.id

    if(!updatedRoom){
        return next(new ErrorHandler('room not found with this id',404))
    }

    res.status(200).json({
        success:true,
        room:updatedRoom
    
    })
    
        
    } catch (error) {
        
    res.status(400).json({
        success:false,
        error:error.message
    })
    
    
    }
    }
    
    const deleteSingleRoom  =async (req,res,next)=>{

        try {
        
        let room = await Room.findById(req.query.id)

        if(!room){
            return next(new ErrorHandler('room not found with this id',404))
        }

        await room.remove();
        
        res.status(200).json({
            success:true,
            message:"roomDeleted"
        
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
    singleRoom,
    updateRoom,
    deleteSingleRoom
}