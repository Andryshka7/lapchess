import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import roomsRouter from './routes/rooms.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_DB = process.env.MONGO_DB

const app = express()

app.use(cors())
app.use(express.json())

app.use('/rooms', roomsRouter)
app.get('/', (req, res) => res.send('<h1>Hello, world!</h1>'))

const server = createServer(app)

const socket = new Server(server, {
    cors: {
        origin: CLIENT_URL,
        methods: ['GET', 'POST']
    }
})

socket.on('connection', (socket) => {
    // console.log('User connected')
})

mongoose.connect(MONGO_DB).then(() => {
    console.log('Connected to mongo database')
})

server.listen(PORT, () => {
    console.log('Server is live...')
})

export default socket
