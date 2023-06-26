import { Chess } from '../../../types/Chess'
import initialState from '../../../initialState/initialState'
import API from 'api'
import socket from 'socket'

const quitGame = (state: Chess) => {
    const { opponentLeft } = state.status

    if (opponentLeft) API.deleteGame(state.gameId as string)
    else socket.emit('LEAVE_FROM_GAME', state.gameId)

    return initialState

}

export default quitGame
