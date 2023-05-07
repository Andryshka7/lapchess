import { Castling, ChessBoard, ChessPiece } from '../../types/ChessBoard'

const handleCasling = (state: ChessBoard, x2: number, y2: number) => {
    const { turn, gameField, selected } = state

    if (selected) {
        const { x: x1, y: y1 } = selected
        const king = (turn + 'K') as ChessPiece
        const rook = (turn + 'R') as ChessPiece

        const k = x2 > x1 ? 1 : -1
        gameField[y1][4 + k] = rook
        gameField[y1][4 + 2 * k] = king
        gameField[y1][4] = '0'
        gameField[y1][k > 0 ? 7 : 0] = '0'

        state.lastMoves = [
            { from: { name: king, x: x1, y: y1 }, to: { name: king, x: x1 + 2 * k, y: y1 } },
            { from: { name: rook, x: x2, y: y2 }, to: { name: rook, x: x1 + k, y: y1 } }
        ]

        state.castling = state.castling.replace(turn === 'w' ? 'K' : 'k', '') as Castling
        state.castling = state.castling.replace(turn === 'w' ? 'Q' : 'q', '') as Castling
    }
}

export default handleCasling
