import { Chess } from '../types/InitialState'
import chessBoard from './chessBoard/chessBoard'

const initialState: Chess = {
    gameId: null,
    white: null,
    black: null,
    time: null,
    color: null,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard]
}

export default initialState
