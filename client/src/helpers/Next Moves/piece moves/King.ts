const getKingMoves = ([x, y]: number[]) => {
    return [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x + 1, y]
    ]
}
export default getKingMoves
