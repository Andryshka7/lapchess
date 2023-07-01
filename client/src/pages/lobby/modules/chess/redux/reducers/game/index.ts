import restartReducers from './mutators/restart'
import drawReducers from './mutators/draw'

import updateGame from './mutators/updateGame'
import quitGame from './mutators/quitGame'
import updateGameId from './mutators/updateGameId'
import playerResigned from './mutators/playerResigned'
import resetChess from './mutators/resetChess'
import cancelGame from './mutators/cancelGame'

export default {
    ...restartReducers,
    ...drawReducers,
    updateGame: updateGame,
    quitGame,
    cancelGame,
    playerResigned,
    updateGameId,
    resetChess
}
