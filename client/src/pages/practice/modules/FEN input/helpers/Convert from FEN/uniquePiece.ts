type PieceCount = { [key: string]: { [key: string]: number } }

const uniquePiece = (pieceCount: PieceCount, name: string) => {
    if (name === '0') return '0'

    const [color, piece] = name
    pieceCount[piece][color]++

    const count = pieceCount[piece][color]
    const pawnCount = pieceCount['P'][color]

    if (piece === 'K') return name
    if (piece === 'P') return name + count

    if (piece === 'Q') {
        if (count > 1) {
            pieceCount['P'][color]++
            return name + 'P' + (pawnCount + 1)
        } else return name
    }

    if (['R', 'B', 'N'].includes(piece)) {
        if (count > 2) {
            pieceCount['P'][color]++
            return name + 'P' + pawnCount
        } else return name + count
    }
}

export default uniquePiece
