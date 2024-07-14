import { PayloadAction } from '@reduxjs/toolkit'
import { opposite } from 'helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'
import {
	handleCasling,
	handleEnPassant,
	handlePawnPromotion,
	handlePieceMove
} from 'helpers/Handle Move'
import socket from 'socket'

import { Chess } from '../../../types/Chess'
import {
	addToPositionHistory,
	handleTimeControls,
	setCurrentPosition,
	updateGame
} from '../helpers'

type MovePayload = {
	coordinates: number[][]
	time: number
}

const handleMove = (state: Chess, action: PayloadAction<MovePayload>) => {
	setCurrentPosition(state)

	const { coordinates, time } = action.payload

	const { chessBoard } = state
	const { turn, gameField, promoted } = chessBoard

	const [[x1, y1], [x2, y2]] = coordinates

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
		handleTimeControls(state, time)
	}

	if (chessBoard.turn !== state.color) {
		updateGame(state)
		socket.emit('HANDLE_MOVE', state.gameId, action.payload)
	}

	chessBoard.selected = null
	chessBoard.nextMoves = []
}

export default handleMove
