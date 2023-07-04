import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const restartGameQuery = async (gameId: string, restartTime: number) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/restartGame/${gameId}`, restartTime)
    } catch (error) {
        throw error
    }
}

export default restartGameQuery
