import { ChessBoard, GameData, Player } from 'types'

export interface Chess {
    color: null | string
    white: Player
    black: Player
    chessBoard: ChessBoard
    position: number
    positionHistory: GameData[]
    status: {
        isActive: boolean
        restartState: {
            ownerAgreed: boolean
            opponentAgreed: boolean
        }
        drawState: {
            ownerSent: boolean
            opponentSent: boolean
        }
        opponentLeft: boolean
    }
}
