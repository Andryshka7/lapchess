import chessBoard from 'config/chessBoard/chessBoard'

type Player = {
    username: string
    avatar: string
    _id: string
} | null

const createDocument = (white: Player, black: Player, gameId: string) => {
    const { gameField, enpassing, turn, castling, checkStatus, chessMoves } = chessBoard
    const gameData = { gameField, enpassing, turn, castling, checkStatus, chessMoves }

    const document = {
        white,
        black,
        gameId,
        chessBoard: gameData,
        positionHistory: [gameData]
    }
    return document
}

export default createDocument
