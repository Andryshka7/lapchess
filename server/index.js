import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { usersRouter, roomsRouter, imagesRouter, chessGamesRouter } from './routes/index.js'
import { ChessGames, Users, Rooms } from './models/index.js'
import handleSocketEvents from './socket/eventHandlers.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_DB = process.env.MONGO_DB

const app = express()

app.use(cors())
app.use(json())

app.use('/rooms', roomsRouter)
app.use('/users', usersRouter)
app.use('/images', imagesRouter)
app.use('/chessGames', chessGamesRouter)

app.get('/', (_, res) => res.send('<h1>Hello, world!</h1>'))

const server = createServer(app)

const socket = new Server(server, {
    cors: {
        origin: CLIENT_URL,
        methods: ['GET', 'POST']
    }
})

socket.on('connection', handleSocketEvents)

mongoose.connect(MONGO_DB).then(() => {
    console.log('Connected to mongo database')
})

server.listen(PORT, async () => {
    // await Rooms.deleteMany({})
    // await ChessGames.deleteMany({})
    // await Users.deleteMany({})
    console.log('Server is live...')
})

export default socket
