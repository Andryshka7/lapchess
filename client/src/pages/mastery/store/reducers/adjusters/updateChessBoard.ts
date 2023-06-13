import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'
import chessBoard from 'config/chessBoard/chessBoard'
import { ChessBoard } from 'types/ChessBoard'

const updateChessBoard = (state: Mastery, action: PayloadAction<ChessBoard>) => {
    state.chessBoard = { ...chessBoard, ...action.payload }
}

export default updateChessBoard
