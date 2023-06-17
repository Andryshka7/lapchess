import chessBoard from 'config/chessBoard/chessBoard'
import { Player } from 'types'

const createDocument = (white: Player, black: Player, gameId: string) => {
    const { gameField, enpassing, turn, castling, gameStatus, chessMoves } = chessBoard
    const gameData = { gameField, enpassing, turn, castling, gameStatus, chessMoves }

    const document = {
        white,
        black,
        gameId,
        chessBoard: gameData
    }
    return document
}

export default createDocument
