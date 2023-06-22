import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const restartGame = async (gameId: string) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/drawGame/${gameId}`)
    } catch (error) {
        throw error
    }
}

export default restartGame
