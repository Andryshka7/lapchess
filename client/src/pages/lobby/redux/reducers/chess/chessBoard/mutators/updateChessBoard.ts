import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chessBoard from 'config/chessBoard/chessBoard'
import { ChessBoard } from 'types'
import { playSounds } from 'helpers'

const updateChessBoard = (state: Lobby, action: PayloadAction<ChessBoard>) => {
    const { chess } = state
    const { position, positionHistory } = chess

    chess.chessBoard.chessMoves = action.payload.chessMoves
    positionHistory.push({ ...chessBoard, ...action.payload })

    if (position === positionHistory.length - 2) {
        chess.position += 1
        chess.chessBoard = { ...chessBoard, ...action.payload }
        playSounds(chess.chessBoard.sounds)
    }
}

export default updateChessBoard
