import { deleteGameQuery } from 'api/chess games'
import socket from 'socket'

import initialState from '../../../../initialState/initialState'
import { Chess } from '../../../../types/Chess'

const quitGame = (state: Chess) => {
	const { opponentLeft } = state.status

	if (opponentLeft) deleteGameQuery(state.gameId as string)
	else socket.emit('LEAVE_FROM_GAME', state.gameId)

	return initialState
}

export default quitGame
