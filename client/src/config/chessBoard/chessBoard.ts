import { ChessBoard } from 'types'

import gameField from './gameField'

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
	chessMoves: []
}

export default chessBoard
