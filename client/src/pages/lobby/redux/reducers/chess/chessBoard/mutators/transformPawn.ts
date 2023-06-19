import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingCheck, checkForDraw, checkForMate } from 'helpers/Checkers'
import { notateMove, opposite, playSounds } from 'helpers'
import { PromotedPawn } from 'types/ChessBoard'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import passToOpponent from '../helpers/passToOpponent'
import addToPositionHistory from '../helpers/addToPositionHistory'

const transformPawn = (state: Lobby, action: PayloadAction<string>) => {
    const { chessBoard } = state.chess
    const transformation = action.payload

    const { turn, gameField, promoted, chessMoves } = chessBoard
    const { name, eaten, x1, y1, x2, y2 } = promoted as PromotedPawn

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
    
    chessMoves.push(notation)
    chessBoard.turn = opposite(turn)

    if (eaten !== '0') chessBoard.sounds.capture = true
    else chessBoard.sounds.move = true

    checkForKingCheck(chessBoard)
    checkForMate(chessBoard)
    checkForDraw(chessBoard)
    
    playSounds(chessBoard.sounds)
    addToPositionHistory(state)
    passToOpponent(state)
}

export default transformPawn
