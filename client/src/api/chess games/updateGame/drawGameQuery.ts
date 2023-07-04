import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const drawGameQuery = async (gameId: string | null, drawTime: number) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/drawGame/${gameId}`, { drawTime })
    } catch (error) {
        throw error
    }
}

export default drawGameQuery
