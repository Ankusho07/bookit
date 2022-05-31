// this is dynamic routing when we pass some id in the url after api it will autmatically execute the function which will written in this file



import nc from 'next-connect'
import { allRooms, newRoom ,singleRoom,updateRoom} from '../../../contollers/roomController'
import dbConnect  from '../../../config/dbConnect'



const handler = nc()

dbConnect();
var db = require('../../../config/dbConnect')



handler.get(singleRoom)

handler.put(updateRoom)



export default handler