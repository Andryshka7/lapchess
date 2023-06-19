import { Mastery } from 'pages/mastery/redux/types/Mastery'

const addToPositionHistory = (state: Mastery) => {
    const { positionHistory, chessBoard } = state

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

    state.position += 1
    state.positionHistory = [...positionHistory.slice(0, state.position), gameData]
    chessBoard.chessMoves = [
        ...chessMoves.splice(0, state.position - 1),
        chessMoves[chessMoves.length - 1]
    ]
}

export default addToPositionHistory
