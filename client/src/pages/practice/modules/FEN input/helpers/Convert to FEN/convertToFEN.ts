import { ChessBoard } from 'pages/practice/store/types/ChessBoard'
import gameFieldToFen from './convertGameField'

const letters = 'abcdefgh'

const convertToFEN = (chessBoard: ChessBoard) => {
    const { gameField, turn, castling, enpassing } = chessBoard

    const k = turn === 'b' ? 1 : -1
    const enpsg = enpassing ? `${letters[enpassing.x] + (8 - (enpassing.y + k))}` : '-'
    const field = gameFieldToFen(gameField)

    return field + ' ' + turn + ' ' + castling + ' ' + enpsg
}

export default convertToFEN
