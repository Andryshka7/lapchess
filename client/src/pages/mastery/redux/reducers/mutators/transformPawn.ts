import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import { PromotedPawn } from 'types/ChessBoard'
import addToPositionHistory from '../helpers/addToPositionHistory'
import { notateMove } from 'helpers'
import { checkForDraw, checkForKingCheck, checkForMate } from 'helpers/Checkers'

const transformPawn = (state: Mastery, action: PayloadAction<string>) => {
    const { chessBoard } = state
    const transformation = action.payload

    const { name, eaten, x1, y1, x2, y2 } = chessBoard.promoted as PromotedPawn
    const { turn, gameField, chessMoves } = chessBoard

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
    chessBoard.chessMoves = [...chessMoves.slice(0, state.position - 1), notation]

    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    checkForKingCheck(chessBoard)
    checkForMate(chessBoard)
    checkForDraw(chessBoard)

    addToPositionHistory(state)
}

export default transformPawn
