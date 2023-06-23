import { Lobby } from 'pages/lobby/redux/types/Lobby'
import setCurrentPosition from '../../../chessBoard/helpers/setCurrentPosition'

const acceptDraw = (state: Lobby) => {
    setCurrentPosition(state)

    const { chessBoard, position, positionHistory, drawStatus } = state.chess

    drawStatus.opponentSent = false
    drawStatus.ownerSent = false
    chessBoard.gameStatus.draw = true

    positionHistory[position].gameStatus.draw = true
}

export default acceptDraw
