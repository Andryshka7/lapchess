import { ChessGames } from '../../../../../models/index.js'

const restartGame = async (req, res) => {
    try {
        const { gameId } = req.params

        const document = await ChessGames.findOne({ gameId })
        const { white, black, positionHistory } = document
        document.white = black
        document.black = white
        document.positionHistory = [positionHistory[0]]
        await document.save()

        res.status(200).send('Succesfully restarted a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while restarting chess game')
    }
}

export default restartGame
