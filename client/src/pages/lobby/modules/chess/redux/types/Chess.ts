import { ChessBoard, GameData, Player, Time } from 'types'

export interface Chess {
	gameId: null | string
	color: null | string
	white: Player
	black: Player
	time: Time
	chessBoard: ChessBoard
	position: number
	positionHistory: GameData[]
	status: {
		isActive: boolean
		loading: boolean
		error: boolean
		restartState: {
			ownerAgreed: boolean
			opponentAgreed: boolean
		}
		drawState: {
			ownerSent: boolean
			opponentSent: boolean
		}
		cancelled: boolean
		opponentLeft: boolean
	}
}
