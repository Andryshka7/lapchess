import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState/initialState'
import reducers from './reducers'

const masterySlice = createSlice({
    name: 'mastery',
    initialState,
    reducers
})

export default masterySlice.reducer

export const {
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    updateChessBoard,
    switchPosition
} = masterySlice.actions
