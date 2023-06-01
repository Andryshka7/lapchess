import { Chess } from '../types/InitialState'
import chessBoard from './chessBoard/chessBoard'

const initialState: Chess = {
    id: null,
    chessBoard,
    owner: null,
    guest: null,
    color: null,
    initTime: null,
    current: 0,
    chessBoardStates: [],
    time: ''
}

export default initialState
