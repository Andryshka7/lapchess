import { PayloadAction } from '@reduxjs/toolkit'
import { notateMove, opposite } from 'helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import { PromotedPawn } from 'types/ChessBoard'

import addToPositionHistory from '../helpers/addToPositionHistory'

interface PayloadType {
	promoted: PromotedPawn
	transformation: string
}

const transformPawn = (state: Mastery, action: PayloadAction<PayloadType>) => {
	const { chessBoard } = state

	const { turn, gameField, chessMoves } = chessBoard

	const { promoted, transformation } = action.payload

	const { name, eaten, x1, y1, x2, y2 } = promoted

	chessBoard.promoted = null
	gameField[y2][x2] = name[0] + transformation + name.slice(1)

	const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])

	chessMoves.push(notation)
	chessBoard.turn = opposite(turn)

	checkForKingCheck(chessBoard)
	checkForMate(chessBoard)
	checkForDraw(chessBoard)

	addToPositionHistory(state)
}

export default transformPawn
