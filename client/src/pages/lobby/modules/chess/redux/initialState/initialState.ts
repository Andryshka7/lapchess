import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../types/Chess'

const initialState: Chess = {
    gameId: null,
    white: null,
    black: null,
    color: null,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard],
    status: {
        isActive: false,
        loading: false,
        error: false,
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

export default initialState
