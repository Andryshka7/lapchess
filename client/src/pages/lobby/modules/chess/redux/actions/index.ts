import chessSlice from '../chessSlice'

export { default as fetchGame } from './fecthGame'

export const {
	updateGame,
	quitGame,
	cancelGame,

	selectPiece,
	clearField,
	handleMove,
	cancelPromotion,
	transformPawn,
	switchPosition,

	updateGameId,
	setOpponentAgreed,
	setOwnerAgreed,
	setOpponentLeft,
	restartGame,
	playerResigned,
	resetChess,

	setOpponentSent,
	setOwnerSent,
	acceptDraw
} = chessSlice.actions
