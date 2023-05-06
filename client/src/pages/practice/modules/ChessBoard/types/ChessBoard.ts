import { Castling } from './Castling'
import { ChessPiece } from './ChessPiece'
import { PieceProps } from './PieceProps'

export interface ChessBoard {
    gameField: ChessPiece[][]
    nextMoves: number[][]
    selected: { x: number; y: number } | null
    turn: 'w' | 'b'
    coverMoves: number[][]
    castling: Castling
    enpassing: null | { x: number; y: number }
    lastMoves: { from: PieceProps; to: PieceProps | null }[]
}
