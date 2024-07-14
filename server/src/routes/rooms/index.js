import { Router } from 'express'

import createRoom from './handlers/createRoom.js'
import deleteRoom from './handlers/deleteRoom.js'
import fetchRooms from './handlers/fetchRooms.js'

const roomsRouter = Router()

roomsRouter.get('/', fetchRooms)
roomsRouter.post('/', createRoom)
roomsRouter.delete('/:id', deleteRoom)

export default roomsRouter
