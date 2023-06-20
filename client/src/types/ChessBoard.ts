import { Coordinates } from '.'

export interface PromotedPawn {
    x1: number
    y1: number
    x2: number
    y2: number
    name: string
    eaten: string
}

interface GameStatus {
    check: null | number[]
    draw: boolean
    winner: null | string
}

interface ChessBoard {
    turn: string
    gameField: string[][]
    gameStatus: GameStatus
    enpassing: null | Coordinates
    castling: string
    chessMoves: string[]
    selected?: null | Coordinates
    nextMoves?: number[][]
    coverMoves?: (number[] | string)[]
    promoted?: null | PromotedPawn
}

export default ChessBoard
