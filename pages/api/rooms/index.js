import nc from 'next-connect'
import { allRooms, newRoom ,singleRoom} from '../../../contollers/roomController'
import dbConnect  from '../../../config/dbConnect'



const handler = nc()

dbConnect();
var db = require('../../../config/dbConnect')

handler.get(allRooms)

handler.get(singleRoom)

handler.post(newRoom)

export default handler