import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import initialState from './initialState'
import { Room } from 'pages/universe/modules/lobby/types/Room'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const fetchRooms = createAsyncThunk<Room[]>(
    'rooms/fetchRooms',
    async () => (await axios.get(`${SERVER_URL}/rooms`)).data
)

const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers: {
        newRoom: (state, action: PayloadAction<Room>) => {
            state.rooms.push(action.payload)
        },
        deleteRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter(({ _id }) => _id !== action.payload)
        },
        setThisRoom: (state, action: PayloadAction<null | string>) => {
            state.thisRoom = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.rooms = action.payload
                state.loading = false
            })
            .addCase(fetchRooms.rejected, (state) => {
                state.error = true
                state.loading = false
            })
    }
})

export default lobbySlice.reducer
export const { newRoom, deleteRoom, setThisRoom } = lobbySlice.actions
