import { playDrawSound } from 'helpers/tools/Play sounds'
import { ChessBoard } from 'types'

import getNextMoves from '../../Next Moves'

const checkForDraw = (chessBoard: ChessBoard) => {
	const { gameField, turn, gameStatus } = chessBoard

	if (gameStatus.check) return

	for (let y = 0; y < 8; y++)
		for (let x = 0; x < 8; x++) {
			const theSameColor = gameField[y][x][0] === turn
			const moves = getNextMoves([x, y], chessBoard)
			if (theSameColor && moves.length) return
		}

	chessBoard.gameStatus.draw = true
	playDrawSound()
}

export default checkForDraw
