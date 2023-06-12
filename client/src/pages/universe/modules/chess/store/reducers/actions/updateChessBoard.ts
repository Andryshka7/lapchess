import { PayloadAction } from '@reduxjs/toolkit'
import { ChessBoard } from '../../types/ChessBoard'
import { Chess } from '../../types/InitialState'
import chessBoard from '../../initialState/chessBoard/chessBoard'

const updateChessBoard = (state: Chess, action: PayloadAction<ChessBoard>) => {
    state.chessBoard.chessMoves = action.payload.chessMoves
    state.positionHistory.push({ ...chessBoard, ...action.payload })
    if (state.position === state.positionHistory.length - 2) {
        state.chessBoard = { ...chessBoard, ...action.payload }
        state.position += 1
    }
}

export default updateChessBoard
