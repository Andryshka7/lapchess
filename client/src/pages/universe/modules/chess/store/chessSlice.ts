import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import chessBoardReducers from './reducers'

interface CreateGamePayload {
    white: null | { avatar: string; username: string; _id: string }
    black: null | { avatar: string; username: string; _id: string }
    color: string
    gameId: string
}

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        ...chessBoardReducers,

        initializeGame: (state, action: PayloadAction<CreateGamePayload>) => {
            const { color, white, black, gameId } = action.payload
            state.gameId = gameId
            state.white = white
            state.black = black
            state.color = color
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
    updateChessBoard,
    switchPosition
} = chessSlice.actions
