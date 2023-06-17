export default function getKnightMoves([x, y]: number[]) {
    return [
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2]
    ]
}
