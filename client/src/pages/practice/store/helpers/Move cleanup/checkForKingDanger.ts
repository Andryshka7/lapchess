import getCoverMoves from './King security/getCoverMoves'
import findPiece from '../findPiece'
import isUnderAttack from '../Next moves/filtration/isUnderAttack'
import checkForMate from './King security/checkForMate'
import { ChessBoard } from '../../types/ChessBoard'

const checkForKingDanger = (chessBoard: ChessBoard) => {
    const { turn, gameField } = chessBoard
    chessBoard.checkStatus = null
    chessBoard.coverMoves = []

    const king = findPiece(turn + 'K', gameField) as number[]
    const checksArray = isUnderAttack(king, gameField, turn === 'w' ? 'b' : 'w')

    if (checksArray.length) {
        chessBoard.checkStatus = king
        chessBoard.chessMoves[chessBoard.chessMoves.length - 1] += '+'
        chessBoard.coverMoves = getCoverMoves(chessBoard, checksArray)

        if (checkForMate(chessBoard, checksArray)) {
            chessBoard.chessMoves[chessBoard.chessMoves.length - 1] += '+'
        }
    }
}

export default checkForKingDanger
