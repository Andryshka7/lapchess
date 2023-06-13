import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../../types/Chess'

const chess: Chess = {
    gameId: null,
    white: null,
    black: null,
    color: null,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard]
}

export default chess
