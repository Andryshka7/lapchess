import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Room } from '../../../types/Room'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const initialState: Room[] = []

export const fetchRooms = createAsyncThunk<Room[]>(
    'rooms/fetchRooms',
    async () => (await axios.get(`${SERVER_URL}/rooms`)).data
)

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        newRoom: (state, action: PayloadAction<Room>) => {
            state.push(action.payload)
        },
        deleteRoom: (state, action: PayloadAction<string>) =>
            state.filter(({ id }) => id !== action.payload)
    },
    extraReducers: (build) =>
        build
            .addCase(fetchRooms.fulfilled, (_, action) => action.payload)
            .addCase(fetchRooms.rejected, () => {
                console.log('Error while fetching rooms')
            })
})

export default roomsSlice.reducer
export const { newRoom, deleteRoom } = roomsSlice.actions
