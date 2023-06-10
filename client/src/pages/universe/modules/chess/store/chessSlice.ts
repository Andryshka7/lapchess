import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import chessBoard from './initialState/chessBoard/chessBoard'
import chessBoardReducers from './reducers'

interface CreateGamePayload {
    white: null | { avatar: string; username: string; _id: string }
    black: null | { avatar: string; username: string; _id: string }
    color: string
    time: string
}

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        ...chessBoardReducers,

        initializeGame: (state, action: PayloadAction<CreateGamePayload>) => {
            const { color, white, black, time } = action.payload
            state.white = white
            state.black = black
            state.color = color
            state.time = time
            state.chessBoard = chessBoard
        }
    }
})

export default chessSlice.reducer

export const {
    initializeGame,
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    setChessBoard,
    switchPosition
} = chessSlice.actions
