import getCoverMoves from './helpers/getCoverMoves'
import findPiece from '../findPiece'
import getCellAttackers from '../Get Cell Attackers'
import { ChessBoard } from 'types'

const checkForKingCheck = (chessBoard: ChessBoard) => {
    const { turn, gameField, chessMoves } = chessBoard

    chessBoard.gameStatus.check = null
    chessBoard.coverMoves = []

    const king = findPiece(turn + 'K', gameField) as number[]
    const checksArray = getCellAttackers(king, gameField, turn === 'w' ? 'b' : 'w')

    if (checksArray.length) {
        chessBoard.gameStatus.check = king
        chessBoard.coverMoves = getCoverMoves(chessBoard, checksArray)
        chessMoves[chessMoves.length - 1] += '+'
    }
}

export default checkForKingCheck
