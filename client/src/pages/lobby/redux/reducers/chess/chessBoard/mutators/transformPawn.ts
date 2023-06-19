import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingCheck, checkForDraw, checkForMate } from 'helpers/Checkers'
import { notateMove } from 'helpers'
import { PromotedPawn } from 'types/ChessBoard'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import passToOpponent from '../helpers/passToOpponent'
import addToPositionHistory from '../helpers/addToPositionHistory'

const transformPawn = (state: Lobby, action: PayloadAction<string>) => {
    const { chessBoard } = state.chess
    const transformation = action.payload

    const { name, eaten, x1, y1, x2, y2 } = chessBoard.promoted as PromotedPawn
    const { turn, gameField } = chessBoard

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
    chessBoard.chessMoves.push(notation)

    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    checkForKingCheck(chessBoard)
    checkForMate(chessBoard)
    checkForDraw(chessBoard)

    addToPositionHistory(state)
    passToOpponent(state)
}

export default transformPawn
