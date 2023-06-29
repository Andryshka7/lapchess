import axios from 'axios'
import { GameData, Player, Time } from 'types'

interface Response {
    user: Player
    token: string
    chessGame: null | {
        gameId: string
        time: Time
        white: Player
        black: Player
        positionHistory: GameData[]
    }
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
