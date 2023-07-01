import chessBoard from 'config/chessBoard/chessBoard'
import { Chess } from '../types/Chess'

const time = {
    initTime: null,
    lastMove: null,

    white: {
        firstMoveTime: 0,
        elapsedTime: 0
    },
    black: {
        firstMoveTime: 0,
        elapsedTime: 0
    },

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
    cancelled: false,
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
