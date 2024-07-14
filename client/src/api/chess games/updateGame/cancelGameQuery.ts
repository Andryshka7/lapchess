import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const cancelGameQuery = async (gameId: string | null) => {
	try {
		await axios.post(`${SERVER_URL}/chessGames/cancelGame/${gameId}`)
	} catch (error) {
		throw error
	}
}

export default cancelGameQuery
