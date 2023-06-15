import chess from './chess/chess'
import { Lobby } from '../types/Lobby'

const initialState: Lobby = {
    loading: true,
    error: false,
    gameId: null,
    chess,
    rooms: []
}

export default initialState
