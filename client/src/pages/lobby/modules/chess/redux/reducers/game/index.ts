import restartReducers from './mutators/restart'
import drawReducers from './mutators/draw'

import updateGame from './mutators/update game/updateGame'
import quitGame from './mutators/update game/quitGame'
import updateGameId from './mutators/updateGameId'
import playerResigned from './mutators/update game/playerResigned'
import resetChess from './mutators/resetChess'
import cancelGame from './mutators/update game/cancelGame'

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
