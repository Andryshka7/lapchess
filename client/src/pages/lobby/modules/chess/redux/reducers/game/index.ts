import drawReducers from './mutators/draw'
import resetChess from './mutators/resetChess'
import restartReducers from './mutators/restart'
import cancelGame from './mutators/update game/cancelGame'
import playerResigned from './mutators/update game/playerResigned'
import quitGame from './mutators/update game/quitGame'
import updateGame from './mutators/update game/updateGame'
import updateGameId from './mutators/updateGameId'

export default {
	...restartReducers,
	...drawReducers,
	updateGame: updateGame,
	quitGame,
	cancelGame,
	playerResigned,
	updateGameId,
	resetChess
}
