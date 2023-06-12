import { Mastery } from '../../../types/Mastery'

const addToPositionHistory = (state: Mastery) => {
    const { position, positionHistory, chessBoard } = state

    const { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves }

    state.positionHistory = [...positionHistory.slice(0, position), gameData]
}

export default addToPositionHistory
