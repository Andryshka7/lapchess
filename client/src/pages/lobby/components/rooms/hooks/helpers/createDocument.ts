import initialChessBoard from 'config/chessBoard/chessBoard'
import { Player } from 'types'

const createDocument = (white: Player, black: Player, gameId: string) => {
    const { gameField, enpassing, turn, castling, gameStatus, chessMoves, coverMoves } = initialChessBoard
    const gameData = { gameField, enpassing, turn, castling, gameStatus, chessMoves, coverMoves }

    const document = {
        white,
        black,
        gameId,
        chessBoard: gameData
    }
    return document
}

export default createDocument
