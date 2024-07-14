import { PayloadAction } from '@reduxjs/toolkit'
import { opposite } from 'helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'
import {
	handleCasling,
	handleEnPassant,
	handlePawnPromotion,
	handlePieceMove
} from 'helpers/Handle Move'
import { Mastery } from 'pages/mastery/redux/types/Mastery'

import addToPositionHistory from '../helpers/addToPositionHistory'

interface MovePayload {
	coordinates: number[][]
}

const handleMove = (state: Mastery, action: PayloadAction<MovePayload>) => {
	const { chessBoard } = state
	const { turn, gameField, promoted } = chessBoard

	const [[x1, y1], [x2, y2]] = action.payload.coordinates

	const [_, piece] = gameField[y1][x1]

	const castling = piece === 'K' && Math.abs(x2 - x1) > 1
	const enPassant = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
	const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)

	if (pawnPromoted) {
		handlePawnPromotion(chessBoard, [x1, y1], [x2, y2])
	} else if (castling) {
		handleCasling(chessBoard, [x1, y1], [x2, y2])
	} else if (enPassant) {
		handleEnPassant(chessBoard, [x1, y1], [x2, y2])
	} else {
		handlePieceMove(chessBoard, [x1, y1], [x2, y2])
	}

	if (!pawnPromoted) {
		chessBoard.turn = opposite(turn)

		checkForKingCheck(chessBoard)
		checkForMate(chessBoard)
		checkForDraw(chessBoard)

		addToPositionHistory(state)
	}

	state.chessBoard.selected = null
	state.chessBoard.nextMoves = []
}

export default handleMove
