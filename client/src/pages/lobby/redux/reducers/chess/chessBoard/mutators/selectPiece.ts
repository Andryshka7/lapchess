import { PayloadAction } from '@reduxjs/toolkit'
import getNextMoves from 'helpers/Next Moves'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

interface SelectPiecePayload {
    x: number
    y: number
}

const selectPiece = (state: Lobby, action: PayloadAction<SelectPiecePayload>) => {
    const { chessBoard } = state.chess
    const { x, y } = action.payload

    chessBoard.selected = { x, y }
    chessBoard.nextMoves = getNextMoves([x, y], chessBoard)
}

export default selectPiece
