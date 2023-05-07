import { ChessBoard } from '../../types/ChessBoard'

const handleEnPassant = (state: ChessBoard, x2: number, y2: number) => {
    const { selected, gameField } = state
    if (selected) {
        const { x: x1, y: y1 } = selected
        const piece = gameField[y1][x1]
        const eatenPiece = gameField[y1][x2]

        gameField[y2][x2] = gameField[y1][x1]
        gameField[y1][x2] = '0'
        gameField[y1][x1] = '0'

        state.lastMoves = [
            { from: { name: piece, x: x1, y: y1 }, to: { name: piece, x: x2, y: y2 } },
            { from: { name: eatenPiece, x: x2, y: y1 }, to: null }
        ]
    }
}

export default handleEnPassant
