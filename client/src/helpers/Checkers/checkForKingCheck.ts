import getCoverMoves from './helpers/getCoverMoves'
import findPiece from '../findPiece'
import getCellAttackers from '../Get Cell Attackers'
import { ChessBoard } from 'types'
import checkSound from 'assets/sounds/check.mp3'

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
        const sound = new Audio(checkSound)
        sound.volume = 0.5
        sound.play()
    }
}

export default checkForKingCheck
