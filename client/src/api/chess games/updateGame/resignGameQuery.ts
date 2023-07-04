import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

interface Payload {
    color: string | null
    resignTime: number
}

const resignGameQuery = async (gameId: string | null, payload: Payload) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/resignGame/${gameId}`, payload)
    } catch (error) {
        throw error
    }
}

export default resignGameQuery
