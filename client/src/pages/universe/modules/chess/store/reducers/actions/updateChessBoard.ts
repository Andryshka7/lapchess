import { PayloadAction } from '@reduxjs/toolkit'
import { ChessBoard } from '../../types/ChessBoard'
import { Chess } from '../../types/InitialState'
import chessBoard from '../../initialState/chessBoard/chessBoard'

const updateChessBoard = (state: Chess, action: PayloadAction<ChessBoard>) => {
    state.chessBoard = { ...chessBoard, ...action.payload }
}

export default updateChessBoard
