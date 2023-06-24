import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../../types/Chess'

const chess: Chess = {
    white: null,
    black: null,
    color: null,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard],
    status: {
        isActive: false,
        restartState: {
            ownerAgreed: false,
            opponentAgreed: false
        },
        drawState: {
            ownerSent: false,
            opponentSent: false
        },
        opponentLeft: false
    }
}

export default chess
