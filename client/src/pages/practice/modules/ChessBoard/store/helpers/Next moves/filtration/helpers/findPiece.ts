import { ChessPiece } from '../../../../../types/ChessPiece'

const findPiece = (piece: ChessPiece, gameField: ChessPiece[][]) => {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) if (gameField[y][x] === piece) return [x, y]
    }
    return [-1, -1]
}

export default findPiece
