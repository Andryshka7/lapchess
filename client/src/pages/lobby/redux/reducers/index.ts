import chessBoardReducers from './chess/chessBoard'
import gameReducers from './chess/game'
import roomsReducers from './rooms'

export default {
    ...chessBoardReducers,
    ...roomsReducers,
    ...gameReducers
}
