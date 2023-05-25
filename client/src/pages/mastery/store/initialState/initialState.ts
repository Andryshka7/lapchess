import { ChessBoard } from '../types/ChessBoard'
import chessBoard from './chessBoard'

export interface IMastery {
    chessBoard: ChessBoard
    current: number
    chessBoardStates: ChessBoard[]
}

const initialState: IMastery = {
    chessBoard,
    current: 0,
    chessBoardStates: [chessBoard]
}

export default initialState
