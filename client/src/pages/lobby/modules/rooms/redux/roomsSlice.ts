import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import fetchRooms from './actions/fetchRooms'
import { Room } from 'types'
import { initialState, roomsAdapter } from './initialState'
import { RootState } from 'redux/store'

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRoom: (state, action: PayloadAction<Room>) => {
            roomsAdapter.addOne(state, action.payload)
        },
        removeRoom: (state, action: PayloadAction<string>) => {
            roomsAdapter.removeOne(state, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.loading = false
                roomsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRooms.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const { selectAll: selectAllRooms } = roomsAdapter.getSelectors<RootState>(
    (store) => store.rooms
)

export default roomsSlice
