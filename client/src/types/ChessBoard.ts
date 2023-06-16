export interface PromotedPawn {
    x1: number
    y1: number
    x2: number
    y2: number
    name: string
    eaten: string
}

interface Position {
    x: number
    y: number
}

interface GameStatus {
    check: null | number[]
    mate: boolean
    draw: boolean
}

interface ChessBoard {
    turn: string
    selected: null | Position
    gameField: string[][]
    nextMoves: number[][]
    gameStatus: GameStatus
    coverMoves: (number[] | string)[]
    enpassing: null | Position
    castling: string
    promoted: null | PromotedPawn
    chessMoves: string[]
}

export default ChessBoard
