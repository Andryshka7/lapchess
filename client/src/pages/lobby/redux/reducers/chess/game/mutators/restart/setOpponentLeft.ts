import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'

const setOpponentLeft = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.opponentLeft = action.payload
}

export default setOpponentLeft
