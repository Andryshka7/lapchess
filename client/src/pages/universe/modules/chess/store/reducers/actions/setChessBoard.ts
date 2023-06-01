import { PayloadAction } from '@reduxjs/toolkit'
import { ChessBoard } from '../../types/ChessBoard'
import { Chess } from '../../types/InitialState'

const setChessBoard = (state: Chess, action: PayloadAction<ChessBoard>) => {
    state.chessBoard = action.payload
}

export default setChessBoard
