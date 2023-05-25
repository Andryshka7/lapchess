export interface PromotedPawn {
    x1: number
    y1: number
    x2: number
    y2: number
    name: string
    eaten: string
}

export interface ChessBoard {
    gameField: string[][]
    globalNextMoves: number[][]
    coverMoves: number[][] | string[]
    selected: { x: number; y: number } | null
    enpassing: { x: number; y: number } | null
    turn: string
    castling: string
    promoted: PromotedPawn | null
    checkStatus: number[] | null
    chessMoves: string[]
}
