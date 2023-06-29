import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const resetGame = async (gameId: string) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/restartGame/${gameId}`)
    } catch (error) {
        throw error
    }
}

export default resetGame
