import { PayloadAction } from '@reduxjs/toolkit'
import { checkForKingCheck, checkForDraw, checkForMate } from 'helpers/Checkers'
import { notateMove, opposite } from 'helpers'
import { PromotedPawn } from 'types/ChessBoard'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { playCaptureSound, playMoveSound } from 'helpers/tools/Play sounds'
import addToPositionHistory from '../helpers/addToPositionHistory'
import socket from 'socket'
import updateGame from '../helpers/updateGame'
import setCurrentPosition from '../helpers/setCurrentPosition'

interface PayloadType {
    promoted: PromotedPawn
    transformation: string
}

const transformPawn = (state: Lobby, action: PayloadAction<PayloadType>) => {
    setCurrentPosition(state)

    const { chessBoard } = state.chess
    const { turn, gameField, chessMoves } = chessBoard

    const { promoted, transformation } = action.payload
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

    if (chessBoard.turn !== state.chess.color) {
        const payload = { promoted, transformation }
        socket.emit('HANDLE_PROMOTED_PAWN', state.gameId, payload)
        updateGame(state)
    } else {
        eaten !== '0' ? playCaptureSound() : playMoveSound()
    }
}

export default transformPawn
