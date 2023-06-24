import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const setOwnerSent = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.status.drawState.ownerSent = action.payload
}

export default setOwnerSent
