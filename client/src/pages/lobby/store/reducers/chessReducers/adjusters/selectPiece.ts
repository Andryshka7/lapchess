import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from '../../../types/Lobby'

interface SelectPiecePayload {
    x: number
    y: number
    nextMoves: number[][]
}

const selectPiece = (state: Lobby, action: PayloadAction<SelectPiecePayload>) => {
    const { chessBoard } = state.chess
    const { x, y, nextMoves } = action.payload

    chessBoard.selected = { x, y }
    chessBoard.globalNextMoves = nextMoves
}

export default selectPiece
