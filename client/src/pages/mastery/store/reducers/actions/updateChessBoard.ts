import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'
import { ChessBoard } from '../../types/ChessBoard'
import chessBoard from '../../initialState/chessBoard/chessBoard'

const updateChessBoard = (state: Mastery, action: PayloadAction<ChessBoard>) => {
    state.chessBoard = { ...chessBoard, ...action.payload }
}

export default updateChessBoard
