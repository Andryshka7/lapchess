import { createSlice } from '@reduxjs/toolkit'
import chessBoard from 'config/chessBoard/chessBoard'

import reducers from './reducers'
import { Mastery } from './types/Mastery'

const initialState: Mastery = {
	chessBoard,
	position: 0,
	positionHistory: [chessBoard]
}

const masterySlice = createSlice({
	name: 'mastery',
	initialState,
	reducers
})

export default masterySlice
