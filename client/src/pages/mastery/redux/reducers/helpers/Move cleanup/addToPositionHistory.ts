import { Mastery } from '../../../types/Mastery'

const addToPositionHistory = (state: Mastery) => {
    const { position, positionHistory, chessBoard } = state

    const { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves }

    state.positionHistory = [...positionHistory.slice(0, position), gameData]
}

export default addToPositionHistory
