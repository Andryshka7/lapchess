import GameData from './GameData'
import Player from './Player'
import Time from './Time'

interface ChessGame {
	gameId: string
	white: Player
	black: Player
	time: Time
	positionHistory: GameData[]
	cancelled?: boolean
}

export default ChessGame
