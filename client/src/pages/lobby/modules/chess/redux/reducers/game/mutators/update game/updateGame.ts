import { PayloadAction } from '@reduxjs/toolkit'
import { GameData, Player, Time } from 'types'
import { Chess } from '../../../../types/Chess'
import initialChessBoard from 'config/chessBoard/chessBoard'

interface updateGamePayload {
    white: Player
    black: Player
    time: Time
    color?: string
    cancelled?: boolean
    positionHistory?: GameData[]
}

const updateGame = (state: Chess, action: PayloadAction<updateGamePayload>) => {
    const { white, black, time, color, positionHistory, cancelled } = action.payload

    state.status.isActive = true

    state.color = color || state.color

    state.white = white
    state.black = black
    state.time = time
    state.status.cancelled = cancelled || false

    state.positionHistory = positionHistory || [initialChessBoard]
    state.position = state.positionHistory.length - 1
    state.chessBoard = { ...initialChessBoard, ...state.positionHistory[state.position] }
}

export default updateGame
