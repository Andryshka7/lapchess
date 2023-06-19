import gameField from './gameField'
import { ChessBoard } from 'types'

const chessBoard: ChessBoard = {
    turn: 'w',
    gameField,
    gameStatus: {
        check: null,
        draw: false,
        winner: null
    },
    castling: 'KQkq',
    coverMoves: [],
    selected: null,
    promoted: null,
    enpassing: null,
    nextMoves: [],
    chessMoves: [],
    sounds: {
        capture: false,
        move: false,
        mate: false,
        draw: false
    }
}

export default chessBoard
