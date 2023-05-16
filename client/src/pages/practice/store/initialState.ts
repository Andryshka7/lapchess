import createGameField from './helpers/createGameField'
import { ChessBoard } from './types/ChessBoard'

export const gameField = createGameField([
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
])

const initialState: ChessBoard = {
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

export default initialState
