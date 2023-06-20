import axios from 'axios'
import { ChessBoard, Player } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

interface Payload {
    white: Player
    black: Player
    gameId: string
    chessBoard: ChessBoard
}

const createGame = async (document: Payload) => {
    try {
        const response = await axios.put<string>(`${SERVER_URL}/chessGames`, document)
        return response.data
    } catch (error) {
        throw error
    }
}

export default createGame
