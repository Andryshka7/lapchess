import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../types/InitialState'

interface SelectPiecePayload {
    x: number
    y: number
    nextMoves: number[][]
}

const selectPiece = (state: Chess, action: PayloadAction<SelectPiecePayload>) => {
    const { x, y, nextMoves } = action.payload
    state.chessBoard.selected = { x, y }
    state.chessBoard.globalNextMoves = nextMoves
}

export default selectPiece
