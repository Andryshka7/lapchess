import { Router } from 'express'
import Rooms from '../models/Rooms.js'
import socket from '../index.js'
import validateToken from './helpers/validateToken.js'

const roomsRouter = Router()

roomsRouter.get('/', async (req, res) => {
    try {
        const rooms = await Rooms.find().populate('user').exec()
        res.status(200).send(rooms)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Error while getting rooms')
    }
})

roomsRouter.post('/', async (req, res) => {
    try {
        const { user, color, time } = req.body

        const document = await new Rooms({ user, color, time }).save()
        const populated = await Rooms.populate(document, { path: 'user' })

        socket.emit('NEW_ROOM', populated)

        res.status(200).send(populated._id)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Error while creating room')
    }
})

roomsRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Rooms.findByIdAndDelete(id)

        socket.emit('DELETE_ROOM', id)
        res.status(200).send('Room has been deleted')
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Error deleting this room')
    }
})

export default roomsRouter
