import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chessBoard from 'config/chessBoard/chessBoard'
import { ChessBoard } from 'types'
import moveSound from 'assets/sounds/move.mp3'

const updateChessBoard = (state: Lobby, action: PayloadAction<ChessBoard>) => {
    const { chess } = state
    const { position, positionHistory } = chess

    chess.chessBoard.chessMoves = action.payload.chessMoves
    positionHistory.push({ ...chessBoard, ...action.payload })

    if (position === positionHistory.length - 2) {
        state.chess.position += 1
        state.chess.chessBoard = { ...chessBoard, ...action.payload }
        new Audio(moveSound).play()
    }
}

export default updateChessBoard
