import { PayloadAction } from '@reduxjs/toolkit'
import { handleCasling, handlePawnPromotion, handleEnPassant, handlePieceMove } from '../helpers'
import { Lobby } from '../../../types/Lobby'

interface HandleMovePayload {
    x: number
    y: number
}

const handleMove = (state: Lobby, action: PayloadAction<HandleMovePayload>) => {
    const { chessBoard } = state.chess
    const { selected, gameField, promoted } = chessBoard

    const { x: x1, y: y1 } = selected as { x: number; y: number }
    const { x: x2, y: y2 } = action.payload

    const [color, piece] = gameField[y1][x1]

    const castling = piece === 'K' && Math.abs(x2 - x1) > 1
    const enPassant = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
    const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)

    if (pawnPromoted) {
        handlePawnPromotion(state, [x1, y1], [x2, y2])
    } else if (castling) {
        handleCasling(state, [x2, y2])
    } else if (enPassant) {
        handleEnPassant(state, [x2, y2])
    } else {
        handlePieceMove(state, [x2, y2])
    }

    chessBoard.selected = null
    chessBoard.globalNextMoves = []
}

export default handleMove