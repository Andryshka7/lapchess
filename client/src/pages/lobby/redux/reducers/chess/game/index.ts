import restartReducers from './mutators/restart'
import drawReducers from './mutators/draw'

import initializeGame from './mutators/initializeGame'
import quitGame from './mutators/quitGame'
import updateGameId from './mutators/updateGameId'
import playerResigned from './mutators/playerResigned'

export default {
    ...restartReducers,
    ...drawReducers,
    initializeGame,
    quitGame,
    playerResigned,
    updateGameId
}
