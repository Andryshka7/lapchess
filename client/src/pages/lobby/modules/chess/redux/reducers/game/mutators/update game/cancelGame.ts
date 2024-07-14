import { Chess } from '../../../../types/Chess'

const cancelGame = (state: Chess) => {
	state.status.cancelled = true
}

export default cancelGame
