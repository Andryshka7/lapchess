import { PayloadAction } from '@reduxjs/toolkit'
import {
    handleCasling,
    handlePawnPromotion,
    handleEnPassant,
    handlePieceMove
} from 'helpers/Handle Move'
import {
    addToPositionHistory,
    updateGame,
    setCurrentPosition,
    handleTimeControls
} from '../helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'
import { opposite } from 'helpers'
import { Chess } from '../../../types/Chess'
import socket from 'socket'

type MovePayload = number[][]

const handleMove = (state: Chess, action: PayloadAction<MovePayload>) => {
    setCurrentPosition(state)

    const { chessBoard } = state
    const { turn, gameField, promoted } = chessBoard

    const [[x1, y1], [x2, y2]] = action.payload

    const [_, piece] = gameField[y1][x1]

    const castling = piece === 'K' && Math.abs(x2 - x1) > 1
    const enPassant = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
    const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)

    if (pawnPromoted) {
        handlePawnPromotion(chessBoard, [x1, y1], [x2, y2])
    } else if (castling) {
        handleCasling(chessBoard, [x1, y1], [x2, y2])
    } else if (enPassant) {
        handleEnPassant(chessBoard, [x1, y1], [x2, y2])
    } else {
        handlePieceMove(chessBoard, [x1, y1], [x2, y2])
    }

    if (!pawnPromoted) {
        chessBoard.turn = opposite(turn)

        checkForKingCheck(chessBoard)
        checkForMate(chessBoard)
        checkForDraw(chessBoard)

        addToPositionHistory(state)
    }

    if (chessBoard.turn !== state.color) {
        const payload = [
            [x1, y1],
            [x2, y2]
        ]
        socket.emit('HANDLE_MOVE', state.gameId, payload)
        updateGame(state)
    }

    chessBoard.selected = null
    chessBoard.nextMoves = []

    handleTimeControls(state)
}

export default handleMove
