import { Lobby } from 'pages/lobby/redux/types/Lobby'

const addToPositionHistory = (state: Lobby) => {
    const { chessBoard, positionHistory } = state.chess

    const { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves }

    state.chess.position += 1
    positionHistory.push(gameData)
}

export default addToPositionHistory
