import { ChessGames } from '../models/index.js'

const handleSocketEvents = (socket) => {
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
}

export default handleSocketEvents