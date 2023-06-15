import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import chessBoard from 'config/chessBoard/chessBoard'
import reducers from './reducers'

import fetchLobbyData from './actions/fetchLobbyData'

const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchLobbyData.pending, (state) => {
                state.loading = true
                state.error = false
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