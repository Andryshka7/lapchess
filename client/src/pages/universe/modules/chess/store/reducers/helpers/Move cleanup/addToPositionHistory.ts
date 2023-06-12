import { Chess } from '../../../types/InitialState'

const addToPositionHistory = ({ chessBoard, positionHistory }: Chess) => {
    const { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves }
    positionHistory.push(gameData)
}

export default addToPositionHistory
