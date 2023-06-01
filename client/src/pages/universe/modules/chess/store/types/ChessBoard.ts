export interface PromotedPawn {
    x1: number
    y1: number
    x2: number
    y2: number
    name: string
    eaten: string
}

type selectedType = null | { x: number; y: number }
type enpassingType = null | { x: number; y: number }

type coverMovesType = (number[] | string)[]

export interface ChessBoard {
    gameField: string[][]
    globalNextMoves: number[][]
    coverMoves: coverMovesType
    selected: selectedType
    enpassing: enpassingType
    turn: string
    castling: string
    promoted: null | PromotedPawn
    checkStatus: null | number[]
    chessMoves: string[]
}
