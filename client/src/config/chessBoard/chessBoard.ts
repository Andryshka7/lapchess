import gameField from './gameField'
import { ChessBoard } from 'types'

const chessBoard: ChessBoard = {
    gameField,
    globalNextMoves: [],
    selected: null,
    turn: 'w',
    checkStatus: null,
    promoted: null,
    coverMoves: [],
    castling: 'KQkq',
    enpassing: null,
    chessMoves: []
}

export default chessBoard
