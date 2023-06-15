import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from '../../types/Lobby'
import { Player } from 'types'

interface InitializeGamePayload {
    white: Player
    black: Player
    color: string
    gameId: string
}

const initializeGame = (state: Lobby, action: PayloadAction<InitializeGamePayload>) => {
    const { color, white, black, gameId } = action.payload
    state.gameId = gameId
    state.chess.white = white
    state.chess.black = black
    state.chess.color = color
}

export default initializeGame
