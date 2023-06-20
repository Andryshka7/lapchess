import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const resignGame = async (gameId: string, player: string) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/resignGame/${gameId}`, player)
    } catch (error) {
        throw error
    }
}

export default resignGame
