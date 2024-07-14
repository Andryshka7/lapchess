import { Coordinates } from 'types/ChessBoard'

interface GameStatus {
	check: null | number[]
	draw: boolean
	winner: null | string
}

interface GameData {
	turn: string
	gameField: string[][]
	gameStatus: GameStatus
	enpassing: null | Coordinates
	castling: string
	chessMoves: string[]
	coverMoves: number[][]
}

export default GameData
