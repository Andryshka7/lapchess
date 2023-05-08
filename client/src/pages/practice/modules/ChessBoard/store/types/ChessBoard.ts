export type Castling = 'KQkq' | 'KQk' | 'Kkq' | 'Kk' | 'Qkq' | 'Qk' | 'kq' | 'k' | '-'

export type ChessPiece =
    | 'bR'
    | 'bN'
    | 'bB'
    | 'bQ'
    | 'bK'
    | 'bP'
    | 'wR'
    | 'wN'
    | 'wB'
    | 'wQ'
    | 'wK'
    | 'wP'
    | '0'

type RerenderQueue = {
    from: {
        x: number
        y: number
        name: ChessPiece
    }
    to: {
        x: number
        y: number
        name: ChessPiece
    }
}[]

export interface PromotedPawn {
    x1: number
    y1: number
    x2: number
    y2: number
    name: ChessPiece
    eaten: ChessPiece
}

export interface ChessBoard {
    gameField: ChessPiece[][]
    globalNextMoves: number[][]
    selected: { x: number; y: number } | null
    turn: 'w' | 'b'
    coverMoves: number[][] | string[]
    castling: Castling
    enpassing: null | { x: number; y: number }
    promoted: PromotedPawn | null
    checkStatus: number[] | null
    rerenderQueue: RerenderQueue
}
