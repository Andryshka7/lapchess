import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { usersRouter, roomsRouter, imagesRouter } from './routes/index.js'
import chessGamesRouter from './routes/chessGames.js'
import ChessGames from './models/ChessGames.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_DB = process.env.MONGO_DB

const app = express()

app.use(cors())
app.use(json())
app.use(cookieParser())

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

socket.on('connection', (socket) => {
    socket.on('JOIN_ROOM', (id) => socket.join(id))
    socket.on('GAME_INITIALIZED', (id, payload) => {
        socket.to(id).emit('GAME_INITIALIZED', payload)
    })
    socket.on('HANDLE_MOVE', async (id, chessBoard) => {
        const document = await ChessGames.findOne({ gameId: id })
        document.chessBoard = chessBoard
        await document.save()
        socket.to(id).emit('HANDLE_MOVE', chessBoard)
    })
})

mongoose.connect(MONGO_DB).then(() => {
    console.log('Connected to mongo database')
})

server.listen(PORT, () => {
    console.log('Server is live...')
})

export default socket
