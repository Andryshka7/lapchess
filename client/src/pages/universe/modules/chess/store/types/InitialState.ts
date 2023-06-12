import { ChessBoard } from './ChessBoard'

interface User {
    avatar: string
    username: string
}

export interface Chess {
    gameId: null | string
    color: null | string
    time: null | string
    white: null | User
    black: null | User
    chessBoard: ChessBoard
    position: number
    positionHistory: Partial<ChessBoard>[]
}
