import { checkForKingDanger } from '..'
import { Castling, ChessBoard } from '../../types/ChessBoard'

const handleCasling = (state: ChessBoard, x2: number, y2: number) => {
    const { turn, gameField, selected } = state

    const { x: x1, y: y1 } = selected as { x: number; y: number }
    const king = turn + 'K'
    const rook = turn + 'R'

    const k = x2 > x1 ? 1 : -1
    gameField[y1][4 + k] = rook
    gameField[y1][4 + 2 * k] = king
    gameField[y1][4] = '0'
    gameField[y1][k > 0 ? 7 : 0] = '0'

    state.castling = state.castling.replace(turn === 'w' ? 'K' : 'k', '') as Castling
    state.castling = state.castling.replace(turn === 'w' ? 'Q' : 'q', '') as Castling

    state.chessMoves.push(x2 > x1 ? '0-0' : '0-0-0')
    state.turn = state.turn === 'w' ? 'b' : 'w'
    
    checkForKingDanger(state)
}

export default handleCasling
