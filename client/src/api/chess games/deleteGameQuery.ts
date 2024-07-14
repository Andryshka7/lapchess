import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const deleteGameQuery = async (gameId: string) => {
	try {
		await axios.delete(`${SERVER_URL}/chessGames/${gameId}`)
	} catch (error) {
		throw error
	}
}

export default deleteGameQuery
