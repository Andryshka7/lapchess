const gameFieldToFen = (gameField: string[][]) => {
    let fen = ''

    for (let row of gameField) {
        let part = ''
        let skip = 0

        for (let element of row) {
            if (element === '0') skip += 1
            else {
                const [color, piece] = element
                part += (skip || '') + (color === 'w' ? piece.toUpperCase() : piece.toLowerCase())
                skip = 0
            }
        }
        fen += part + (skip || '') + '/'
    }
    return fen.slice(0, -1)
}

export default gameFieldToFen
