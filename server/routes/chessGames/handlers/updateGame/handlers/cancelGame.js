import { ChessGames } from '../../../../../models/index.js'

const cancelGame = async (req, res) => {
    try {
        const { gameId } = req.params

        const document = await ChessGames.findOne({ gameId })
        document.cancelled = true

        await document.save()

        res.status(200).send('Succesfully cancelled a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while cancelling chess game')
    }
}

export default cancelGame
