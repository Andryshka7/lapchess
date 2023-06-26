import chessBoardReducers from './chessBoard'
import gameReducers from './game'

export default {
    ...chessBoardReducers,
    ...gameReducers,
}
