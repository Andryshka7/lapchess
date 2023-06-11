import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingDanger, notateMove } from '../helpers'
import { PromotedPawn } from '../../types/ChessBoard'
import { Chess } from '../../types/InitialState'
import passToOpponent from '../helpers/passToOpponent'

const transformPawn = (state: Chess, action: PayloadAction<string>) => {
    const { chessBoard, positionHistory } = state
    const transformation = action.payload

    const { name, eaten, x1, y1, x2, y2 } = chessBoard.promoted as PromotedPawn
    const { turn, gameField, chessMoves } = chessBoard

    chessBoard.promoted = null
    gameField[y2][x2] = name[0] + action.payload + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])

    state.position += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves = [...chessMoves.slice(0, state.position - 1), notation]
    checkForKingDanger(chessBoard)
    state.positionHistory = [...positionHistory.slice(0, state.position), chessBoard]

    passToOpponent(state)
}

export default transformPawn
