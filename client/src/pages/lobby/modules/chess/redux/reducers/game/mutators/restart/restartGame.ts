import { Chess } from '../../../../types/Chess'
import initialState from '../../../../initialState/initialState'
import { opposite } from 'helpers'

const restartGame = (state: Chess) => {
    const { gameId, color, white, black } = state
    return {
        ...initialState,
        color: opposite(color as string),
        gameId,
        white: black,
        black: white,
        time: {
            ...initialState.time,
            limit: state.time.limit,
            addition: state.time.addition
        },
        status: {
            ...initialState.status,
            isActive: true
        }
    }
}

export default restartGame
