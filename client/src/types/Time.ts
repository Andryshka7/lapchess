interface Time {
	initTime: null | number
	lastMove: null | number

	white: {
		firstMoveTime: number
		elapsedTime: number
	}
	black: {
		firstMoveTime: number
		elapsedTime: number
	}

	limit: null | number
	addition: number
}

export default Time
