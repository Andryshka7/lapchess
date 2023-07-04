import { createSelector, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import chessBoard from 'config/chessBoard/chessBoard'
import reducers from './reducers'
import fetchGame from './actions/fecthGame'
import { RootState } from 'redux/store'

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGame.pending, (state) => {
                state.status.loading = true
                state.status.error = false
            })
            .addCase(fetchGame.fulfilled, (state, action) => {
                if (action.payload) {
                    const { white, black, time, cancelled, positionHistory } = action.payload

                    state.status.isActive = true

                    state.white = white
                    state.black = black
                    state.time = time
                    state.status.cancelled = cancelled || false

                    state.positionHistory = positionHistory
                    state.position = state.positionHistory.length - 1
                    state.chessBoard = {
                        ...chessBoard,
                        ...positionHistory[state.position]
                    }
                }
                state.status.loading = false
            })
            .addCase(fetchGame.rejected, (state) => {
                state.status.loading = false
                state.status.error = true
            })
    }
})

export const selectChessLoading = createSelector(
    [(store: RootState) => store.chess.status.loading],
    (loading) => loading
)
export const selectChessError = createSelector(
    [(store: RootState) => store.chess.status.error],
    (error) => error
)
export const selectChessIsActive = createSelector(
    [(store: RootState) => store.chess.status.isActive],
    (isActive) => isActive
)

export default chessSlice
