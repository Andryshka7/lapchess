import { Chess } from '../../../../types/Chess'
import setCurrentPosition from '../../../chessBoard/helpers/setCurrentPosition'

const acceptDraw = (state: Chess) => {
    setCurrentPosition(state)

    const {
        chessBoard,
        position,
        positionHistory,
        status: { drawState }
    } = state

    drawState.opponentSent = false
    drawState.ownerSent = false
    chessBoard.gameStatus.draw = true

    positionHistory[position].gameStatus.draw = true
}

export default acceptDraw
