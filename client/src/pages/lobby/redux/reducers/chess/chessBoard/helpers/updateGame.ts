import { updateChessBoard } from 'api/chess games'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const updateGame = (state: Lobby) => {
    const {
        gameId,
        chess: { chessBoard }
    } = state
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

    updateChessBoard(gameId as string, gameData)
}

export default updateGame
