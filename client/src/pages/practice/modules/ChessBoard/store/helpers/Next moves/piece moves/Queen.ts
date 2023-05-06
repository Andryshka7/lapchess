import rookMoves from './Rook'
import bishopMoves from './Bishop'

export default function queenMoves([x, y]: number[], { gameField }: { gameField: string[][] }) {
    return [...rookMoves([x, y], { gameField }), ...bishopMoves([x, y], { gameField })]
}
