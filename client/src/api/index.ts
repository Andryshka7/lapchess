import {
    createGame,
    deleteGame,
    drawGame,
    resetGame,
    resignGame,
    fetchGame,
    updateChessBoard
} from './chess games'

import { createRoom, deleteRoom, fetchRooms } from './rooms'
import { login, signUp } from './users'

const API = {
    createGame,
    deleteGame,
    fetchGame,
    updateChessBoard,
    drawGame,
    resignGame,
    resetGame,

    createRoom,
    deleteRoom,
    fetchRooms,

    login,
    signUp
}

export default API
