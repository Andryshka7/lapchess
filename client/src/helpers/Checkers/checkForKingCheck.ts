import { opposite } from 'helpers'
import { ChessBoard } from 'types'

import getCellAttackers from '../Get Cell Attackers'
import findPiece from '../tools/findPiece'
import getCoverMoves from './helpers/getCoverMoves'

const checkForKingCheck = (chessBoard: ChessBoard) => {
	const { turn, gameField, chessMoves } = chessBoard

	chessBoard.gameStatus.check = null
	chessBoard.coverMoves = []

	const king = findPiece(turn + 'K', gameField) as number[]
	const checksArray = getCellAttackers(king, gameField, opposite(turn))

	if (checksArray.length) {
		chessBoard.gameStatus.check = king
		chessBoard.coverMoves = getCoverMoves(chessBoard, checksArray)
		chessMoves[chessMoves.length - 1] += '+'
	}
}

export default checkForKingCheck
