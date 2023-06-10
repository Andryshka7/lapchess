import { Mastery } from '../types/Mastery'
import chessBoard from './chessBoard/chessBoard'

const initialState: Mastery = {
    chessBoard,
    position: 0,
    positionHistory: [chessBoard]
}

export default initialState
