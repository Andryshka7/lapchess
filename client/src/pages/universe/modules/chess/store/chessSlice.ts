import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Chess } from '../types/initialState'
import socket from 'socket/socket'

const initialState: Chess = {
    id: null,
    chessBoard: null,
    chat: [],
    color: null,
    time: ''
}

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
