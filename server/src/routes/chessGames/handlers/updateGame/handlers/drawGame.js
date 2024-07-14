import { ChessGames } from '../../../../../models/index.js'

const drawGame = async (req, res) => {
	try {
		const { gameId } = req.params
		const { drawTime } = req.body

		const document = await ChessGames.findOne({ gameId })
		const lastPosition = document.positionHistory[document.positionHistory.length - 1]
		lastPosition.gameStatus.draw = true

		const { time } = document
		const { lastMove } = time

		if (lastPosition.turn === 'w' && lastMove) {
			time.white.elapsedTime += drawTime - lastMove
		} else if (lastPosition.turn === 'b' && lastMove) {
			time.black.elapsedTime += drawTime - lastMove
		}

		document.markModified('time')
		document.markModified('positionHistory')
		await document.save()

		res.status(200).send('Succesfully updated a chess game')
	} catch (error) {
		console.log(error.message)
		res.status(400).json('Error while updating chess game')
	}
}

export default drawGame
