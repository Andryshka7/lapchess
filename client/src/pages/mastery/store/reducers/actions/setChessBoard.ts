import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'
import { ChessBoard } from '../../types/ChessBoard'

const setChessBoard = (state: Mastery, action: PayloadAction<ChessBoard>) => {
    state.chessBoard = action.payload
}

export default setChessBoard
