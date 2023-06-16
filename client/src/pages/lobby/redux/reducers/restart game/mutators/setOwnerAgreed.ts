import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const setOwnerAgreed = (state: Lobby, action: PayloadAction<boolean>) => {
    state.chess.restartStatus.ownerAgreed = action.payload
}

export default setOwnerAgreed
