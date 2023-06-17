import restartGame from './mutators/restart/restartGame'
import setOpponentAgreed from './mutators/restart/setOpponentAgreed'
import setOwnerAgreed from './mutators/restart/setOwnerAgreed'
import setOpponentLeft from './mutators/restart/setOpponentLeft'

import initializeGame from './mutators/initializeGame'
import quitGame from './mutators/quitGame'
import updateGameId from './mutators/updateGameId'
import playerResigned from './mutators/playerResigned'

export default {
    restartGame,
    setOpponentAgreed,
    setOwnerAgreed,
    setOpponentLeft,
    initializeGame,
    quitGame,
    playerResigned,
    updateGameId
}
