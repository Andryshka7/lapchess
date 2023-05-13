export type Castling = 'KQkq' | 'KQk' | 'Kkq' | 'Kk' | 'Qkq' | 'Qk' | 'kq' | 'k' | '-'

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
    selected: { x: number; y: number } | null
    turn: 'w' | 'b'
    coverMoves: number[][] | string[]
    castling: Castling
    enpassing: { x: number; y: number } | null
    promoted: PromotedPawn | null
    checkStatus: number[] | null
    chessMoves: string[]
}
