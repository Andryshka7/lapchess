import axios from 'axios'
import { ChessGame, GameData} from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

type Payload = Omit<ChessGame, 'positionHistory' | 'cancelled'> & { chessBoard: GameData }

const createGameQuery = async (document: Payload) => {
    try {
        const response = await axios.put<string>(`${SERVER_URL}/chessGames`, document)
        return response.data
    } catch (error) {
        throw error
    }
}

export default createGameQuery
