import getNextMoves from '../../../Next moves/getNextMoves'
import { ChessBoard } from '../../../../types/ChessBoard'

const checkForMate = (state: ChessBoard, checksArray: number[][]) => {
    const { gameField, turn, checkStatus } = state

    if (!checkStatus) return false

    const kingEscape = getNextMoves(checkStatus, state)

    if (checksArray.length > 1) return !kingEscape.length

    for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
            const theSameColor = gameField[y][x][0] === turn
            const moves = getNextMoves([x, y], state)
            if (theSameColor && moves.length) return false
        }

    return true
}

export default checkForMate
