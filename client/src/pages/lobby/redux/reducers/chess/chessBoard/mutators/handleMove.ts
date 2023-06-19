import { PayloadAction } from '@reduxjs/toolkit'
import {
    handleCasling,
    handlePawnPromotion,
    handleEnPassant,
    handlePieceMove
} from 'helpers/Handle Move'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

import addToPositionHistory from '../helpers/addToPositionHistory'
import passToOpponent from '../helpers/passToOpponent'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'
import moveSound from 'assets/sounds/move.mp3'

interface Coordinates {
    x: number
    y: number
}

const handleMove = (state: Lobby, action: PayloadAction<Coordinates>) => {
    const { chessBoard } = state.chess
    const { turn, selected, gameField, promoted } = chessBoard

    const { x: x1, y: y1 } = selected as Coordinates
    const { x: x2, y: y2 } = action.payload

    const [_, piece] = gameField[y1][x1]

    const castling = piece === 'K' && Math.abs(x2 - x1) > 1
    const enPassant = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
    const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)

    if (pawnPromoted) {
        handlePawnPromotion(chessBoard, [x1, y1], [x2, y2])
    } else if (castling) {
        handleCasling(chessBoard, [x2, y2])
    } else if (enPassant) {
        handleEnPassant(chessBoard, [x2, y2])
    } else {
        handlePieceMove(chessBoard, [x2, y2])
    }

    if (!pawnPromoted) {
        chessBoard.turn = turn === 'w' ? 'b' : 'w'

        checkForKingCheck(chessBoard)
        checkForMate(chessBoard)
        checkForDraw(chessBoard)

        addToPositionHistory(state)
        passToOpponent(state)
    }

    chessBoard.selected = null
    chessBoard.nextMoves = []
    new Audio(moveSound).play()
}

export default handleMove
