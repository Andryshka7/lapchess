import { ChessGames } from '../../../../../models/index.js'

const restartGame = async (req, res) => {
    try {
        const { gameId } = req.params
        const restartTime = req.body

        const document = await ChessGames.findOne({ gameId })
        const { white, black, positionHistory } = document

        document.white = black
        document.black = white

        document.time.white = {
            firstMoveTime: 0,
            elapsedTime: 0
        }
        document.time.black = {
            firstMoveTime: 0,
            elapsedTime: 0
        }

        document.time.initTime = restartTime
        document.time.lastMove = null
        document.cancelled = false

        const initialPosition = positionHistory[0]
        initialPosition.gameStatus.winner = null
        initialPosition.gameStatus.draw = false
        document.positionHistory = [initialPosition]

        document.markModified('time')
        document.markModified('positionHistory')
        await document.save()

        res.status(200).send('Succesfully restarted a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while restarting chess game')
    }
}

export default restartGame
