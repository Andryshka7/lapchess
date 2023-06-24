import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const setOpponentSent = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.status.drawState.opponentSent = action.payload
}

export default setOpponentSent
