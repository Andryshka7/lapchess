import { ChessBoard, Player } from 'types'

export interface Chess {
    color: null | string
    white: Player
    black: Player
    chessBoard: ChessBoard
    position: number
    positionHistory: ChessBoard[]
    restartStatus: {
        ownerAgreed: boolean
        opponentAgreed: boolean
    }
    opponentLeft: boolean
}
