import initialChessBoard from 'config/chessBoard/chessBoard'
import { Player } from 'types'

const createDocument = (white: Player, black: Player, time: string, gameId: string) => {
    const { gameField, enpassing, turn, castling, gameStatus, chessMoves, coverMoves } = initialChessBoard
    const gameData = { gameField, enpassing, turn, castling, gameStatus, chessMoves, coverMoves }

    const document = {
        white,
        black,
        gameId,
        time,
        chessBoard: gameData
    }
    return document
}

export default createDocument
