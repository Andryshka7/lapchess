import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingDanger, notateMove } from '../helpers'
import { PromotedPawn } from 'types/ChessBoard'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import passToOpponent from '../helpers/Move cleanup/passToOpponent'
import addToPositionHistory from '../helpers/Move cleanup/addToPositionHistory'

const transformPawn = (state: Lobby, action: PayloadAction<string>) => {
    const { chessBoard } = state.chess
    const transformation = action.payload

    const { name, eaten, x1, y1, x2, y2 } = chessBoard.promoted as PromotedPawn
    const { turn, gameField } = chessBoard

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves.push(notation)
    checkForKingDanger(chessBoard)

    addToPositionHistory(state)
    passToOpponent(state)
}

export default transformPawn
