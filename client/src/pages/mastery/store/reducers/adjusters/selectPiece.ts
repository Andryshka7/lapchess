import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'

interface SelectPiecePayload {
    x: number
    y: number
    nextMoves: number[][]
}

const selectPiece = (state: Mastery, action: PayloadAction<SelectPiecePayload>) => {
    const { x, y, nextMoves } = action.payload
    state.chessBoard.selected = { x, y }
    state.chessBoard.globalNextMoves = nextMoves
}

export default selectPiece
