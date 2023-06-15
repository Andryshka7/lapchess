import { Lobby } from '../../../../types/Lobby'

const addToPositionHistory = (state: Lobby) => {
    const { chessBoard, positionHistory } = state.chess

    const { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves }

    state.chess.position += 1
    positionHistory.push(gameData)
}

export default addToPositionHistory
