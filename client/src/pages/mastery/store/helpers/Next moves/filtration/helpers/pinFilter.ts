const pinFilter = (move: number[], piece: number[], king: number[]) => {
    let [x, y] = move
    let [x1, y1] = piece
    let [x2, y2] = king

    const k = (y2 - y1) / (x2 - x1)
    const b = y1 - x1 * k

    return y === k * x + b || (x === x1 && x === x2)
}

export default pinFilter
