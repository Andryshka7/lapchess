import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import { PromotedPawn } from 'types/ChessBoard'
import addToPositionHistory from '../helpers/addToPositionHistory'
import { notateMove, opposite, playSounds } from 'helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'

const transformPawn = (state: Mastery, action: PayloadAction<string>) => {
    const { chessBoard } = state
    const transformation = action.payload

    const { turn, gameField, chessMoves, promoted } = chessBoard
    const { name, eaten, x1, y1, x2, y2 } = promoted as PromotedPawn

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
    chessBoard.chessMoves = [...chessMoves.slice(0, state.position - 1), notation]

    chessBoard.turn = opposite(turn)

    if (eaten !== '0') chessBoard.sounds.capture = true
    else chessBoard.sounds.move = true

    checkForKingCheck(chessBoard)
    checkForMate(chessBoard)
    checkForDraw(chessBoard)

    playSounds(chessBoard.sounds)
    addToPositionHistory(state)
}

export default transformPawn
