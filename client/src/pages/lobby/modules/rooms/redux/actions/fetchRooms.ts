import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { Room } from 'types'
import API from 'api'

const fetchRooms = createAsyncThunk<Room[], void, { state: RootState }>(
    'rooms/fetchRooms',
    async () => {
        const rooms = await API.fetchRooms()

        return rooms
    }
)

export default fetchRooms
