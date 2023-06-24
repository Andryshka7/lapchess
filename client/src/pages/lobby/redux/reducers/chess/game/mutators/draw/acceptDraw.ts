import { Lobby } from 'pages/lobby/redux/types/Lobby'
import setCurrentPosition from '../../../chessBoard/helpers/setCurrentPosition'

const acceptDraw = (state: Lobby) => {
    setCurrentPosition(state)

    const {
        chessBoard,
        position,
        positionHistory,
        status: { drawState }
    } = state.chess

    drawState.opponentSent = false
    drawState.ownerSent = false
    chessBoard.gameStatus.draw = true

    positionHistory[position].gameStatus.draw = true
}

export default acceptDraw
