import { Room } from 'types/Room'
import { Lobby } from '../../types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'

const addRoom = (state: Lobby, action: PayloadAction<Room>) => {
    state.rooms.push(action.payload)
}

export default addRoom
