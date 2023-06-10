import { ChessBoard } from './ChessBoard'

export interface Mastery {
    chessBoard: ChessBoard
    position: number
    positionHistory: ChessBoard[]
}
