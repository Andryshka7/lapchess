import chessReducers from './chess'
import roomsReducers from './rooms'

export default {
    ...chessReducers,
    ...roomsReducers
}