import { PayloadAction } from '@reduxjs/toolkit'
import socket from 'socket'

import { Chess } from '../../../types/Chess'

const updateGameId = (state: Chess, action: PayloadAction<null | string>) => {
	if (action.payload) {
		socket.emit('JOIN_ROOM', action.payload)
		state.gameId = action.payload
	} else {
		socket.emit('LEAVE_ROOM', state.gameId)
		state.gameId = null
	}
}

export default updateGameId
