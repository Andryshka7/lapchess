import { Room } from 'types'
import { PayloadAction } from '@reduxjs/toolkit'
import { Rooms } from '../../types/Rooms'

const addRoom = (state: Rooms, action: PayloadAction<Room>) => {
    state.rooms.push(action.payload)
}

export default addRoom
