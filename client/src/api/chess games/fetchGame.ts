import axios from 'axios'
import { ChessBoard, Player } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

interface Response {
    white: Player
    black: Player
    gameId: string
    positionHistory: ChessBoard[]
}

const fetchGame = async (gameId: string | null) => {
    try {
        const response = await axios.get<Response>(`${SERVER_URL}/chessGames/${gameId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default fetchGame
