import { checkForKingDanger } from '..'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import addToPositionHistory from '../Move cleanup/addToPositionHistory'

const handleCasling = (state: Mastery, [x2, _]: number[]) => {
    const { chessBoard } = state

    const { turn, gameField, selected, castling, chessMoves } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const king = gameField[y1][4]
    const rook = gameField[y1][x2]

    const k = x2 > x1 ? 1 : -1
    gameField[y1][4 + k] = rook
    gameField[y1][4 + 2 * k] = king
    gameField[y1][4] = '0'
    gameField[y1][x2] = '0'

    chessBoard.castling = castling.replace(turn === 'w' ? 'K' : 'k', '')
    chessBoard.castling = castling.replace(turn === 'w' ? 'Q' : 'q', '')

    const notation = x2 > x1 ? '0-0' : '0-0-0'

    state.position += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves = [...chessMoves.slice(0, state.position - 1), notation]
    checkForKingDanger(chessBoard)
    addToPositionHistory(state)
}

export default handleCasling
