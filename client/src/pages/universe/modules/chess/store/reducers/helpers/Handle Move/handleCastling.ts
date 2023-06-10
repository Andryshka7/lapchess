import { checkForKingDanger } from '..'
import { Chess } from '../../../types/InitialState'

const handleCasling = (state: Chess, [x2, y2]: number[]) => {
    const { chessBoard, positionHistory } = state

    const { turn, gameField, selected, castling, chessMoves } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const king = turn + 'K'
    const rook = turn + 'R'

    const k = x2 > x1 ? 1 : -1
    gameField[y1][4 + k] = rook
    gameField[y1][4 + 2 * k] = king
    gameField[y1][4] = '0'
    gameField[y1][k > 0 ? 7 : 0] = '0'

    chessBoard.castling = castling.replace(turn === 'w' ? 'K' : 'k', '')
    chessBoard.castling = castling.replace(turn === 'w' ? 'Q' : 'q', '')

    const notation = x2 > x1 ? '0-0' : '0-0-0'

    state.position += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves = [...chessMoves.slice(0, state.position - 1), notation]
    checkForKingDanger(chessBoard)
    state.positionHistory = [...positionHistory.slice(0, state.position), chessBoard]
}

export default handleCasling
