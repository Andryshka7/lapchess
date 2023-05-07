import { PieceProps } from './PieceProps'

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

type LastMoves = { from: PieceProps; to: PieceProps | null }[]

export interface ChessBoard {
    gameField: ChessPiece[][]
    globalNextMoves: number[][]
    selected: { x: number; y: number } | null
    turn: 'w' | 'b'
    coverMoves: number[][] | string[]
    castling: Castling
    enpassing: null | { x: number; y: number }
    checkStatus: number[] | null
    lastMoves: LastMoves
}
