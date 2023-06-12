import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import initialState from './initialState'
import getRooms from 'api/rooms/getRooms'
import socket from 'socket/socket'

export const fetchRooms = createAsyncThunk<Room[]>('rooms/fetchRooms', getRooms)

const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers: {
        newRoom: (state, action: PayloadAction<Room>) => {
            state.rooms.push(action.payload)
        },
        removeRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter(({ _id }) => _id !== action.payload)
        },
        updateMyRoomId: (state, action: PayloadAction<null | string>) => {
            if (action.payload) socket.emit('JOIN_ROOM', action.payload)
            state.myRoomId = action.payload
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
export const { newRoom, removeRoom, updateMyRoomId } = lobbySlice.actions
