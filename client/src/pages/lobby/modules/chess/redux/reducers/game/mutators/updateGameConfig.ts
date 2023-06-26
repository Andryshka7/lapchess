import { Chess } from '../../../types/Chess'
import { PayloadAction } from '@reduxjs/toolkit'
import socket from 'socket'

type PayloadType = null | {
    gameId: string
    color: string
}

const updateGameConfig = (state: Chess, action: PayloadAction<PayloadType>) => {
    if (action.payload) {
        const { gameId, color } = action.payload

        socket.emit('JOIN_ROOM', gameId)

        state.gameId = gameId
        state.color = color
    } else {
        socket.emit('LEAVE_ROOM', state.gameId)
        state.gameId = null
        state.color = null
    }
}

export default updateGameConfig
