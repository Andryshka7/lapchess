import { ChessGames } from '../../../../../models/index.js'

const updateGame = async (req, res) => {
	try {
		const { gameId } = req.params
		const { time, gameData } = req.body

		const document = await ChessGames.findOne({ gameId })
		document.time = time
		document.positionHistory.push(gameData)
		await document.save()

		res.status(200).send('Succesfully updated a chess game')
	} catch (error) {
		console.log(error.message)
		res.status(400).json('Error while updating chess game')
	}
}

export default updateGame
