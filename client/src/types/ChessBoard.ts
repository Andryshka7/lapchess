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

interface ChessBoard {
    gameField: string[][]
    globalNextMoves: number[][]
    coverMoves: (number[] | string)[]
    selected: null | Position
    enpassing: null | Position
    turn: string
    castling: string
    promoted: null | PromotedPawn
    checkStatus: null | number[]
    chessMoves: string[]
}

export default ChessBoard
