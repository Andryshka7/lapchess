import { Lobby } from 'pages/lobby/redux/types/Lobby'
import setCurrentPosition from '../../../chessBoard/helpers/setCurrentPosition'

const acceptDraw = (state: Lobby) => {
    setCurrentPosition(state)

    state.chess.drawStatus.opponentSent = false
    state.chess.drawStatus.ownerSent = false
    state.chess.chessBoard.gameStatus.draw = true
}

export default acceptDraw
