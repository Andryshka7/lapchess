import { Rooms } from '../../types/Rooms'
import { PayloadAction } from '@reduxjs/toolkit'

const removeRoom = (state: Rooms, action: PayloadAction<string>) => {
    state.rooms = state.rooms.filter(({ _id }) => _id !== action.payload)
}

export default removeRoom
