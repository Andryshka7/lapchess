import { ChessGames } from '../../../models/index.js'

const createGame = async (req, res) => {
	try {
		const { white, black, gameId, time, chessBoard } = req.body
		const document = new ChessGames({
			white,
			black,
			gameId,
			time,
			chessBoard,
			positionHistory: [chessBoard]
		})
		await document.save()
		res.status(200).send('Succesfully created a chess game')
	} catch (error) {
		console.log(error.message)
		res.status(400).json('Error while creating chess game')
	}
}

export default createGame
