import { findPiece, isInRange } from 'helpers'

const pieceIsPinned = (piece: number[], gameField: string[][]) => {
    const [x1, y1] = piece
    const kingColor = gameField[y1][x1][0]
    const [x2, y2] = findPiece(kingColor + 'K', gameField) as number[]

    const color = kingColor === 'w' ? 'b' : 'w'

    const pieceIsKing = x1 === x2 && y1 === y2
    const onOneLine = x1 === x2 || y1 === y2 || Math.abs((x2 - x1) / (y2 - y1)) === 1

    if (pieceIsKing || !onOneLine) return false

    const kX = x1 > x2 ? -1 : x1 < x2 ? 1 : 0
    const kY = y1 > y2 ? -1 : y1 < y2 ? 1 : 0

    for (let i = 1; x1 + kX * i !== x2 || y1 + kY * i !== y2; i++)
        if (gameField[y1 + i * kY][x1 + i * kX] !== '0') return false

    for (let i = 1; isInRange(x1 - kX * i, y1 - kY * i); i++) {
        let piece = gameField[y1 - kY * i][x1 - kX * i].slice(0, 2)

        const Q = color + 'Q' === piece
        const R = color + 'R' === piece && (kX === 0 || kY === 0)
        const B = color + 'B' === piece && kX && kY

        if (Q || R || B) return true
        else if (piece !== '0') return false
    }

    return false
}

export default pieceIsPinned
