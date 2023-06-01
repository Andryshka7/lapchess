import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import chessBoard from './initialState/chessBoard/chessBoard'
import chessBoardReducers from './reducers'

interface CreateGamePayload {
    owner: { avatar: string; username: string }
    guest: { avatar: string; username: string }
    color: string
    time: string
}

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        ...chessBoardReducers,

        updateID: (state, action: PayloadAction<string | null>) => {
            state.id = action.payload
            if (action.payload) {
                // socket.join()
            }
        },
        createGame: (state, action: PayloadAction<CreateGamePayload>) => {
            const { color, time, owner, guest } = action.payload
            state.initTime = new Date().getTime()
            state.owner = owner
            state.guest = guest
            state.color = color
            state.time = time
            state.chessBoard = chessBoard
        }
    }
})

export default chessSlice.reducer

export const {
    updateID,
    createGame,
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    setChessBoard,
    switchCurrent
} = chessSlice.actions
