import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const setOpponentAgreed = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.status.restartState.opponentAgreed = action.payload
}

export default setOpponentAgreed
