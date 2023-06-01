import { ChessBoard } from './ChessBoard'

interface User {
    avatar: string
    username: string
}

export interface Chess {
    id: null | string
    chessBoard: ChessBoard
    color: null | string
    time: null | string
    owner: null | User
    guest: null | User
    current: number
    chessBoardStates: ChessBoard[]
    initTime: null | number
}
