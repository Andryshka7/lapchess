import { Lobby } from '../../types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'

const removeRoom = (state: Lobby, action: PayloadAction<string>) => {
    state.rooms = state.rooms.filter(({ _id }) => _id !== action.payload)
}

export default removeRoom
