import { Lobby } from '../types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'
import socket from 'socket/socket'

const updateGameId = (state: Lobby, action: PayloadAction<null | string>) => {
    if (action.payload) socket.emit('JOIN_ROOM', action.payload)
    state.gameId = action.payload
}

export default updateGameId
