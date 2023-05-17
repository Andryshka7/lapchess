import { ChessBoard } from '../types/ChessBoard'
import chessBoard from './chessBoard'

export interface PracticeState {
    chessBoard: ChessBoard
    current: number
    chessBoardStates: ChessBoard[]
}

const initialState = {
    chessBoard,
    current: 0,
    chessBoardStates: [chessBoard]
}

export default initialState
