import API from 'api'
import { Chess } from '../../../types/Chess'

const updateGame = (state: Chess) => {
    const { gameId, chessBoard } = state
    const { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves } = chessBoard

    const gameData = {
        gameField,
        turn,
        enpassing,
        castling,
        gameStatus,
        chessMoves,
        coverMoves
    }

    API.updateChessBoard(gameId as string, gameData)
}

export default updateGame
