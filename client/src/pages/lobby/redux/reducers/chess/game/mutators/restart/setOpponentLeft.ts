import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'

const setOpponentLeft = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.status.opponentLeft = action.payload
}

export default setOpponentLeft
