import { Chess } from '../types/InitialState'
import chessBoard from './chessBoard/chessBoard'

const initialState: Chess = {
    fromRoom: null,
    chessBoard,
    white: null,
    black: null,
    time: null,
    color: null,
    position: 0,
    positionHistory: [chessBoard]
}

export default initialState
