import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import reducers from './reducers'

import fetchRooms from './actions/fetchRooms'

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.loading = false
                state.rooms = action.payload
            })
            .addCase(fetchRooms.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export default roomsSlice
