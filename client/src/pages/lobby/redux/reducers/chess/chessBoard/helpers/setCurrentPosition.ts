import { Lobby } from 'pages/lobby/redux/types/Lobby'
import initialChessBoard from 'config/chessBoard/chessBoard'

const setCurrentPosition = (state: Lobby) => {
    const { positionHistory } = state.chess

    state.chess.position = positionHistory.length - 1
    const lastState = JSON.parse(JSON.stringify(positionHistory[state.chess.position]))

    state.chess.chessBoard = { ...initialChessBoard, ...lastState }
}

export default setCurrentPosition
