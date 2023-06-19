import { Coordinates, Sounds } from '.'

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
    selected: null | Coordinates
    gameField: string[][]
    nextMoves: number[][]
    gameStatus: GameStatus
    coverMoves: (number[] | string)[]
    enpassing: null | Coordinates
    castling: string
    promoted: null | PromotedPawn
    chessMoves: string[]
    sounds: Sounds
}

export default ChessBoard
