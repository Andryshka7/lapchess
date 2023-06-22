import axios from 'axios'
import { GameData } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const updateChessGame = async (gameId: string, chessBoard: GameData) => {
    try {
        await axios.post(`${SERVER_URL}/chessGames/updateChessBoard/${gameId}`, chessBoard)
    } catch (error) {
        throw error
    }
}

export default updateChessGame
