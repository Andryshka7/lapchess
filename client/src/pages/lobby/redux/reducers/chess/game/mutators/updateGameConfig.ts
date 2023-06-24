import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'
import socket from 'socket'

type PayloadType = null | {
    gameId: string
    color: string
}

const updateGameConfig = (state: Lobby, action: PayloadAction<PayloadType>) => {
    if (action.payload) {
        const { gameId, color } = action.payload
        
        socket.emit('JOIN_ROOM', gameId)

        state.gameId = gameId
        state.chess.color = color
    } else {
        state.gameId = null
        state.chess.color = null
    }
}

export default updateGameConfig
