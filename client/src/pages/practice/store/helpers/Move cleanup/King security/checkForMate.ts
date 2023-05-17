import { ChessBoard } from 'pages/practice/store/types/ChessBoard'
import getNextMoves from '../../Next moves/getNextMoves'

const checkForMate = (chessBoard: ChessBoard, checksArray: number[][]) => {
    const { gameField, turn, checkStatus } = chessBoard

    if (!checkStatus) return false

    const kingEscape = getNextMoves(checkStatus, chessBoard)

    if (checksArray.length > 1) return !kingEscape.length

    for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
            const theSameColor = gameField[y][x][0] === turn
            const moves = getNextMoves([x, y], chessBoard)
            if (theSameColor && moves.length) return false
        }

    return true
}

export default checkForMate
