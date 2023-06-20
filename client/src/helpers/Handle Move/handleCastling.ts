import { ChessBoard } from 'types'
import { playMoveSound } from 'helpers/tools/Play sounds'

const handleCasling = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, _]: number[]) => {
    const { turn, gameField, chessMoves } = chessBoard

    const king = gameField[y1][4]
    const rook = gameField[y1][x2]

    const k = x2 > x1 ? 1 : -1
    gameField[y1][4 + k] = rook
    gameField[y1][4 + 2 * k] = king
    gameField[y1][4] = '0'
    gameField[y1][x2] = '0'

    chessBoard.castling = chessBoard.castling.replace(turn === 'w' ? 'K' : 'k', '')
    chessBoard.castling = chessBoard.castling.replace(turn === 'w' ? 'Q' : 'q', '')

    const notation = x2 > x1 ? '0-0' : '0-0-0'
    chessMoves.push(notation)

    playMoveSound()
}

export default handleCasling
