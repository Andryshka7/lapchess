import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        updateID: (state, action: PayloadAction<string | null>) => {
            state.id = action.payload
            if (action.payload) {
                // socket.join()
            }
        }
    }
})

export default chessSlice.reducer
export const { updateID } = chessSlice.actions
