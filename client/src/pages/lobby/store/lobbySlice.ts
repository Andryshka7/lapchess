import { createSlice, current } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import roomsReducers from './reducers/roomsReducers'
import chessReducers from './reducers/chessReducers'
import chessBoard from 'config/chessBoard/chessBoard'

import fetchLobbyData from './actions/fetchLobbyData'

const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers: {
        ...roomsReducers,
        ...chessReducers
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLobbyData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchLobbyData.fulfilled, (state, action) => {
                const { chess } = state
                const { rooms, chessGame } = action.payload
                if (chessGame) {
                    chess.position = chessGame.positionHistory.length - 1
                    chess.chessBoard = {
                        ...chessBoard,
                        ...chessGame.positionHistory[chess.position]
                    }
                }
                state.loading = false
                state.rooms = rooms
            })
            .addCase(fetchLobbyData.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export default lobbySlice
