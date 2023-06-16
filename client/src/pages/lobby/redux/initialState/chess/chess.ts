import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../../types/Chess'

const chess: Chess = {
    white: null,
    black: null,
    color: null,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard],
    restartStatus: {
        ownerAgreed: false,
        opponentAgreed: false
    },
    opponentLeft: false
}

export default chess
