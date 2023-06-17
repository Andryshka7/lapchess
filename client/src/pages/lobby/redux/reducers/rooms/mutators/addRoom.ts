import { Room } from 'types'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import { PayloadAction } from '@reduxjs/toolkit'

const addRoom = (state: Lobby, action: PayloadAction<Room>) => {
    state.rooms.push(action.payload)
}

export default addRoom
