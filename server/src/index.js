import cors from 'cors'
import dotenv from 'dotenv'
import express, { json } from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import { dirname, join } from 'path'
import { Server } from 'socket.io'
import { fileURLToPath } from 'url'

import { chessGamesRouter, roomsRouter, usersRouter } from './routes/index.js'
import handleSocketEvents from './socket/eventHandlers.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_DB = process.env.MONGO_DB

const app = express()

app.use(cors())
app.use(json())

app.use('/rooms', roomsRouter)
app.use('/users', usersRouter)
app.use('/chessGames', chessGamesRouter)
app.use('/images', express.static(join(__dirname, '..', 'images')))

app.get('/', (_, res) => res.send('<h1>Lapchess server is working fine!</h1>'))

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
	console.log('Server is working')
})

export default socket
