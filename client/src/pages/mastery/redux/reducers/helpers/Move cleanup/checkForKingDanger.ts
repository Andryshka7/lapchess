import getCoverMoves from './King security/getCoverMoves'
import findPiece from '../findPiece'
import isUnderAttack from '../Next moves/filtration/isUnderAttack'
import checkForMate from './King security/checkForMate'
import { ChessBoard } from 'types'

const checkForKingDanger = (chessBoard: ChessBoard) => {
    const { turn, gameField, chessMoves } = chessBoard

    chessBoard.gameStatus.check = null
    chessBoard.coverMoves = []

    const king = findPiece(turn + 'K', gameField) as number[]
    const checksArray = isUnderAttack(king, gameField, turn === 'w' ? 'b' : 'w')

    if (checksArray.length && chessMoves.length) {
        chessBoard.gameStatus.check = king
        chessBoard.coverMoves = getCoverMoves(chessBoard, checksArray)

        chessMoves[chessBoard.chessMoves.length - 1] += '+'

        if (checkForMate(chessBoard, checksArray)) {
            chessBoard.gameStatus.mate = true
            chessMoves[chessMoves.length - 1] += '+'
        }
    }
}

export default checkForKingDanger
