import { ChessBoard, GameData, Player } from 'types'

export interface Chess {
    color: null | string
    white: Player
    black: Player
    chessBoard: ChessBoard
    position: number
    positionHistory: GameData[]
    restartStatus: {
        ownerAgreed: boolean
        opponentAgreed: boolean
    }
    drawStatus: {
        ownerSent: boolean
        opponentSent: boolean
    }
    opponentLeft: boolean
}
