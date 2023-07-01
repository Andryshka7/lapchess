import axios from 'axios'
import { ChessGame, Player } from 'types'

interface Response {
    user: Player
    token: string
    chessGame: ChessGame | null
}

interface Data {
    username: string
    password: string
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const login = async (data: Data) => {
    try {
        const response = await axios.post<Response>(`${SERVER_URL}/users/login`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

export default login
