import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../types/Chess'

const time = {
    whiteElapsedTime: 0,
    blackElapsedTime: 0,

    startingPoint: null,
    lastMove: null,

    limit: null,
    addition: 0
}

const status = {
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

const initialState: Chess = {
    gameId: null,
    white: null,
    black: null,
    color: null,
    time,
    chessBoard,
    position: 0,
    positionHistory: [chessBoard],
    status
}

export default initialState
