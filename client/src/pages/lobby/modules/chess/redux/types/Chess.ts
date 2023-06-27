import { ChessBoard, GameData, Player } from 'types'

export interface Chess {
    gameId: null | string
    color: null | string
    white: Player
    black: Player
    time: {
        whiteElapsedTime: number
        blackElapsedTime: number

        startingPoint: null | number
        lastMove: null | number

        limit: null | number
        addition: number
    }
    chessBoard: ChessBoard
    position: number
    positionHistory: GameData[]
    status: {
        isActive: boolean

        loading: boolean
        error: boolean

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
