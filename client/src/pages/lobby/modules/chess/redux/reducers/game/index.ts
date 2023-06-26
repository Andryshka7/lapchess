import restartReducers from './mutators/restart'
import drawReducers from './mutators/draw'

import updateGame from './mutators/updateGame'
import quitGame from './mutators/quitGame'
import updateGameConfig from './mutators/updateGameConfig'
import playerResigned from './mutators/playerResigned'
import resetChess from './mutators/resetChess'

export default {
    ...restartReducers,
    ...drawReducers,
    updateGame: updateGame,
    quitGame,
    playerResigned,
    updateGameConfig,
    resetChess
}
