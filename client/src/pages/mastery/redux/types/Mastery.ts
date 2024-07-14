import { ChessBoard, GameData } from 'types'

export interface Mastery {
	chessBoard: ChessBoard
	position: number
	positionHistory: GameData[]
}
