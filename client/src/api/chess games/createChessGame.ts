import axios from 'axios'
import { Player } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

interface Payload {
    white: Player
    black: Player
}

const createChessGame = async (document: Payload) => {
    try {
        const response = await axios.post<string>(`${SERVER_URL}/chessGames`, document)
        return response.data
    } catch (error) {
        throw error
    }
}

export default createChessGame
