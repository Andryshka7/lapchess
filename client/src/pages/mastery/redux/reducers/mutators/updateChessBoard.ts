import { PayloadAction } from '@reduxjs/toolkit'
import chessBoard from 'config/chessBoard/chessBoard'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import { ChessBoard } from 'types'

const updateChessBoard = (state: Mastery, action: PayloadAction<ChessBoard>) => {
	state.chessBoard = { ...chessBoard, ...action.payload }
	state.position = 0
	state.positionHistory = [state.chessBoard]
}

export default updateChessBoard
