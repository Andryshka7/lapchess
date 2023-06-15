import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'
import { getNextMoves } from '../helpers'

interface SelectPiecePayload {
    x: number
    y: number
}

const selectPiece = (state: Mastery, action: PayloadAction<SelectPiecePayload>) => {
    const { chessBoard } = state
    const { x, y } = action.payload
    
    chessBoard.selected = { x, y }
    chessBoard.globalNextMoves = getNextMoves([x, y], chessBoard)
}

export default selectPiece
