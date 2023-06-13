import { ChessBoard, Player } from 'types'

export interface Chess {
    gameId: null | string
    color: null | string
    white: Player
    black: Player
    chessBoard: ChessBoard
    position: number
    positionHistory: Partial<ChessBoard>[]
}
