import { checkForKingDanger } from '..'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import addToPositionHistory from '../Move cleanup/addToPositionHistory'
import passToOpponent from '../Move cleanup/passToOpponent'

const handleCasling = (state: Lobby, [x2, _]: number[]) => {
    const { chessBoard } = state.chess

    const { turn, gameField, selected, castling } = chessBoard
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
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves.push(notation)
    checkForKingDanger(chessBoard)

    addToPositionHistory(state)
    passToOpponent(state)
}

export default handleCasling
