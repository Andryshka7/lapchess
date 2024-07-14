import { ChessBoard } from 'types'

import bishopMoves from './Bishop'
import rookMoves from './Rook'

const queenMoves = ([x, y]: number[], chessBoard: ChessBoard) => {
	return [...rookMoves([x, y], chessBoard), ...bishopMoves([x, y], chessBoard)]
}

export default queenMoves
