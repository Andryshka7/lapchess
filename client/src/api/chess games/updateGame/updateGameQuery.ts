import axios from 'axios'
import { GameData, Time } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const updateGameQuery = async (
    gameId: string,
    { gameData, time }: { gameData: GameData; time: Time }
) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/updateGame/${gameId}`, { time, gameData })
    } catch (error) {
        throw error
    }
}

export default updateGameQuery
