import { opposite } from 'helpers'
import { playWinSound } from 'helpers/tools/Play sounds'
import { ChessBoard } from 'types'

import getCellAttackers from '../../Get Cell Attackers'
import getNextMoves from '../../Next Moves'

const checkForMate = (chessBoard: ChessBoard) => {
	const { gameField, turn, gameStatus, chessMoves } = chessBoard

	if (!gameStatus.check) return

	const checksArray = getCellAttackers(gameStatus.check, gameField, opposite(turn))
	const kingEscape = getNextMoves(gameStatus.check, chessBoard)

	if (checksArray.length > 1 && kingEscape.length === 0) {
		chessBoard.gameStatus.winner = opposite(turn)
		chessMoves[chessMoves.length - 1] += '+'
		return playWinSound()
	}

	for (let y = 0; y < 8; y++)
		for (let x = 0; x < 8; x++) {
			const theSameColor = gameField[y][x][0] === turn
			const moves = getNextMoves([x, y], chessBoard)
			if (theSameColor && moves.length) return
		}

	chessBoard.gameStatus.winner = opposite(turn)
	chessMoves[chessMoves.length - 1] += '+'
	playWinSound()
}

export default checkForMate
