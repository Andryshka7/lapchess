import { Mastery } from '../types/Mastery'
import chessBoard from './chessBoard/chessBoard'

const initialState: Mastery = {
    chessBoard,
    current: 0,
    chessBoardStates: [chessBoard]
}

export default initialState
