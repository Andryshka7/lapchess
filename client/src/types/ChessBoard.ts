export interface PromotedPawn {
	x1: number
	y1: number
	x2: number
	y2: number
	name: string
	eaten: string
}

export interface Coordinates {
	x: number
	y: number
}

interface GameStatus {
	check: null | number[]
	draw: boolean
	winner: null | string
}

interface ChessBoard {
	turn: string
	gameField: string[][]
	gameStatus: GameStatus
	enpassing: null | Coordinates
	castling: string
	chessMoves: string[]
	selected: null | Coordinates
	nextMoves: number[][]
	coverMoves: number[][]
	promoted: null | PromotedPawn
}

export default ChessBoard
