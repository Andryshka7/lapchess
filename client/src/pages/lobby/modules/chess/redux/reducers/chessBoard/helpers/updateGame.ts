import API from 'api'
import { Chess } from '../../../types/Chess'

const updateGame = (state: Chess) => {
    const { gameId, time, chessBoard } = state
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

    API.updateGame(gameId as string, { time, gameData })
}

export default updateGame
