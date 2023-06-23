type PieceCount = { [key: string]: { [key: string]: number } }

const uniquePiece = (pieceCount: PieceCount, name: string) => {
    if (name === '0') return '0'

    const [color, piece] = name
    pieceCount[piece][color] += 1

    const count = pieceCount[piece][color]
    const pawnCount = pieceCount['P'][color]

    if (piece === 'K') return name
    if (piece === 'P') return name + String(count)

    if (piece === 'Q') {
        if (count < 2) {
            return name
        } else {
            pieceCount['P'][color] += 1
            return name + 'P' + String(pawnCount + 1)
        }
    }

    if (['R', 'B', 'N'].includes(piece)) {
        if (count < 3) {
            return name + count
        } else {
            pieceCount['P'][color] += 1
            return name + 'P' + String(pawnCount)
        }
    }
}

export default uniquePiece
