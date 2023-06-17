import { ChessBoard } from 'types'
import getNextMoves from '../../Next moves/getNextMoves'

const checkForMate = (chessBoard: ChessBoard, checksArray: number[][]) => {
    const { gameField, turn, gameStatus } = chessBoard

    if (!gameStatus.check) return false

    const kingEscape = getNextMoves(gameStatus.check, chessBoard)

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
