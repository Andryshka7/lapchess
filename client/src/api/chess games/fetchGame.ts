import axios from 'axios'
import { ChessGame } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const fetchGame = async (gameId: string | null) => {
    try {
        const response = await axios.get<ChessGame | null>(`${SERVER_URL}/chessGames/${gameId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default fetchGame
