import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingCheck, checkForDraw, checkForMate } from 'helpers/Checkers'
import { notateMove, opposite } from 'helpers'
import { PromotedPawn } from 'types/ChessBoard'
import { playCaptureSound, playMoveSound } from 'helpers/tools/Play sounds'
import addToPositionHistory from '../helpers/addToPositionHistory'
import socket from 'socket'
import updateGame from '../helpers/updateGame'
import setCurrentPosition from '../helpers/setCurrentPosition'
import { Chess } from '../../../types/Chess'
import { handleTimeControls } from '../helpers'

interface PayloadType {
    promoted: PromotedPawn
    transformation: string
    time: number
}

const transformPawn = (state: Chess, action: PayloadAction<PayloadType>) => {
    setCurrentPosition(state)

    const { chessBoard } = state
    const { turn, gameField, chessMoves } = chessBoard

    const { promoted, transformation, time } = action.payload
    const { name, eaten, x1, y1, x2, y2 } = promoted

    chessBoard.promoted = null

    gameField[y1][x1] = '0'
    gameField[y2][x2] = name[0] + transformation + name.slice(1)

    const notation = notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])

    chessMoves.push(notation)
    chessBoard.turn = opposite(turn)

    checkForKingCheck(chessBoard)
    checkForMate(chessBoard)
    checkForDraw(chessBoard)

    addToPositionHistory(state)
    handleTimeControls(state, time)

    if (chessBoard.turn !== state.color) {
        socket.emit('HANDLE_PROMOTED_PAWN', state.gameId, action.payload)
        updateGame(state)
    } else {
        eaten !== '0' ? playCaptureSound() : playMoveSound()
    }
}

export default transformPawn
