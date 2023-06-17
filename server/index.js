import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { usersRouter, roomsRouter, imagesRouter, chessGamesRouter } from './routes/index.js'
import { ChessGames, Users, Rooms } from './models/index.js'

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

socket.on('connection', (socket) => {
    socket.on('CREATE_ROOM', (room) => {
        socket.broadcast.emit('ROOM_CREATED', room)
    })
    socket.on('DELETE_ROOM', (id) => {
        socket.broadcast.emit('ROOM_DELETED', id)
    })
    socket.on('JOIN_ROOM', (id) => {
        socket.join(id)
    })
    socket.on('GAME_INITIALIZED', (id, payload) => {
        socket.to(id).emit('GAME_INITIALIZED', payload)
    })

    socket.on('HANDLE_MOVE', async (id, chessBoard) => {
        try {
            const document = await ChessGames.findOne({ gameId: id })
            document.positionHistory.push(chessBoard)
            await document.save()
            socket.to(id).emit('HANDLE_MOVE', chessBoard)
        } catch (error) {
            console.log(error.message)
        }
    })

    socket.on('UPDATE_READY_TO_RESTART', (id, payload) => {
        socket.to(id).emit('UPDATE_READY_TO_RESTART', payload)
    })

    socket.on('LEAVE_FROM_GAME', (id) => {
        socket.to(id).emit('OPPONENT_LEFT')
    })

    socket.on('PLAYER_RESIGNED', async (id, player) => {
        try {
            const document = await ChessGames.findOne({ gameId: id })
            const lastPosition = document.positionHistory[document.positionHistory.length - 1]
            lastPosition.gameStatus.winner = player === 'w' ? 'b' : 'w'
            document.markModified('positionHistory')
            await document.save()

            socket.to(id).emit('PLAYER_RESIGNED', player)
        } catch (error) {
            console.log(error.message)
        }
    })

    socket.on('RESTART_GAME', async (id) => {
        try {
            const document = await ChessGames.findOne({ gameId: id })
            const { white, black, positionHistory } = document
            document.white = black
            document.black = white
            document.positionHistory = [positionHistory[0]]
            await document.save()
            socket.to(id).emit('RESTARTED_GAME')
        } catch (error) {
            console.log(error.message)
        }
    })
})

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
