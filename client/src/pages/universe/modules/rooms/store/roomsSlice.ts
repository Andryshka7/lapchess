import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { build } from 'vite'
import { Room } from '../../../types/Room'

const initialState: Room[] = [
    { user: { avatar: '', username: 'Andryshka16' }, color: 'wK', time: '5 + 3' },
    { user: { avatar: '', username: 'Andryshka16' }, color: 'halfK', time: '10 + 0' }
]

export const fetchRooms = createAsyncThunk<Room[]>('rooms/fetchRooms', () => {
    return []
})

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: (build) =>
        build
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state = action.payload
            })
            .addCase(fetchRooms.rejected, () => {
                console.log('Error while fetching rooms')
            })
})

export default roomsSlice.reducer
