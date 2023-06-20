import { ChessBoard } from 'types'

export interface Mastery {
    chessBoard: ChessBoard
    position: number
    positionHistory: ChessBoard[]
}
