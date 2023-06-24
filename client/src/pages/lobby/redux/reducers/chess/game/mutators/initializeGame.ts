import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { Player } from 'types'

interface InitializeGamePayload {
    white: Player
    black: Player
}

const initializeGame = (state: Lobby, action: PayloadAction<InitializeGamePayload>) => {
    const { white, black } = action.payload

    state.chess.status.isActive = true

    state.chess.white = white
    state.chess.black = black
}

export default initializeGame
