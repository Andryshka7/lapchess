import { PayloadAction } from '@reduxjs/toolkit'
import { GameData, Player } from 'types'
import { Chess } from '../../../types/Chess'
import initialChessBoard from 'config/chessBoard/chessBoard'

interface updateGamePayload {
    white: Player
    black: Player
    chessBoard?: GameData
    positionHistory?: GameData[]
}

const updateGame = (state: Chess, action: PayloadAction<updateGamePayload>) => {
    const { white, black, chessBoard, positionHistory } = action.payload

    state.status.isActive = true

    state.white = white
    state.black = black

    state.chessBoard = { ...initialChessBoard, ...chessBoard } || initialChessBoard
    state.positionHistory = positionHistory || [initialChessBoard]
    state.position = state.positionHistory.length - 1
}

export default updateGame
