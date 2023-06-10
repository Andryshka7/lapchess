import { ChessBoard } from '../../../../types/ChessBoard'

export default function getBishopMoves([x, y]: number[], chessBoard: ChessBoard) {
    const { gameField } = chessBoard
    const moves = []

    for (let i = 1; x + i < 8 && y + i < 8; i++) {
        moves.push([x + i, y + i])
        if (gameField[y + i][x + i] !== '0') break
    }
    for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
        moves.push([x - i, y - i])
        if (gameField[y - i][x - i] !== '0') break
    }
    for (let i = 1; y + i < 8 && x - i >= 0; i++) {
        moves.push([x - i, y + i])
        if (gameField[y + i][x - i] !== '0') break
    }
    for (let i = 1; y - i >= 0 && x + i < 8; i++) {
        moves.push([x + i, y - i])
        if (gameField[y - i][x + i] !== '0') break
    }

    return moves
}
