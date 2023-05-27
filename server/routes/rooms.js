import { Router } from 'express'
import Rooms from '../models/Rooms.js'
import socket from '../index.js'

const roomsRouter = Router()

roomsRouter.get('/', async (req, res) => {
    const rooms = await Rooms.find()
    res.status(200).send(rooms)
})

roomsRouter.post('/', async (req, res) => {
    const room = req.body
    await Rooms.create(room)
    socket.emit('NEW_ROOM', room)
    res.status(200).send('Room has been created')
})

roomsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Rooms.findOneAndDelete({ id })
    socket.emit('DELETE_ROOM', id)
    res.status(200).send('Room has been deleted')
})

export default roomsRouter
