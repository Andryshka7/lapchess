import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const setOpponentSent = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.drawStatus.opponentSent = action.payload
}

export default setOpponentSent
