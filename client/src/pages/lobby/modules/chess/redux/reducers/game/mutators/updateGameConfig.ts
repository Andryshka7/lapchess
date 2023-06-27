import { Chess } from '../../../types/Chess'
import { PayloadAction } from '@reduxjs/toolkit'
import socket from 'socket'

type PayloadType = null | {
    gameId: string
    color: string
    time: string
}

const updateGameConfig = (state: Chess, action: PayloadAction<PayloadType>) => {
    if (action.payload) {
        const { gameId, color, time } = action.payload

        socket.emit('JOIN_ROOM', gameId)

        state.gameId = gameId
        state.color = color

        const [limit, addition] = time.split(' + ')

        state.time.addition = Number(addition) * 1000
        state.time.limit = Number(limit) * 60 * 1000
    } else {
        socket.emit('LEAVE_ROOM', state.gameId)
        state.gameId = null
        state.color = null
        state.time.addition = 0
        state.time.limit = null
    }
}

export default updateGameConfig
