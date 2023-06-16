import chessReducers from './chess'
import roomsReducers from './rooms'
import restartReducers from './restart game'

import initializeGame from './initializeGame'
import quitGame from './quitGame'
import updateGameId from './updateGameId'
import setOpponentLeft from './setOpponentLeft'

export default {
    ...chessReducers,
    ...roomsReducers,
    ...restartReducers,
    setOpponentLeft,
    initializeGame,
    updateGameId,
    quitGame
}
