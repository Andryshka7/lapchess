import gameField from './gameField'
import { ChessBoard } from 'types'

const chessBoard: ChessBoard = {
    turn: 'w',
    gameField,
    gameStatus: {
        check: null,
        mate: false,
        draw: false
    },
    castling: 'KQkq',
    coverMoves: [],
    selected: null,
    promoted: null,
    enpassing: null,
    nextMoves: [],
    chessMoves: []
}

export default chessBoard
