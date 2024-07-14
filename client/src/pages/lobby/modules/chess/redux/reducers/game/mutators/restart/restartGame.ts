import { PayloadAction } from '@reduxjs/toolkit'
import { opposite } from 'helpers'

import initialState from '../../../../initialState/initialState'
import { Chess } from '../../../../types/Chess'

const restartGame = (state: Chess, action: PayloadAction<number>) => {
	const restartTime = action.payload

	const {
		gameId,
		color,
		white,
		black,
		time: { limit, addition }
	} = state

	return {
		...initialState,
		color: opposite(color as string),
		gameId,
		white: black,
		black: white,
		time: {
			...initialState.time,
			initTime: restartTime,
			limit,
			addition
		},
		status: {
			...initialState.status,
			isActive: true
		}
	}
}

export default restartGame
