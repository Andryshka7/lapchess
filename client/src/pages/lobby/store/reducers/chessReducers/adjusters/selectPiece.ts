import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from '../../../types/Lobby'
import { getNextMoves } from '../helpers'

interface SelectPiecePayload {
    x: number
    y: number
}

const selectPiece = (state: Lobby, action: PayloadAction<SelectPiecePayload>) => {
    const { chessBoard } = state.chess
    const { x, y } = action.payload

    chessBoard.selected = { x, y }
    chessBoard.globalNextMoves = getNextMoves([x, y], chessBoard)
}

export default selectPiece