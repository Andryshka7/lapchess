import {
    createGame,
    deleteGame,
    drawGame,
    restartGame,
    resignGame,
    fetchGame,
    cancelGame,
    updateGame
} from './chess games'

import { createRoom, deleteRoom, fetchRooms } from './rooms'
import { login, signUp } from './users'

const API = {
    createGame,
    deleteGame,
    fetchGame,
    updateGame,
    drawGame,
    resignGame,
    restartGame,
    cancelGame,

    createRoom,
    deleteRoom,
    fetchRooms,

    login,
    signUp
}

export default API
