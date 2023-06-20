import { ChessGames } from '../../../../../models/index.js'

const updateChessBoard = async (req, res) => {
    try {
        const { gameId } = req.params
        const gameData = req.body

        const document = await ChessGames.findOne({ gameId })
        document.positionHistory.push(gameData)
        await document.save()

        res.status(200).send('Succesfully updated a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while updating chess game')
    }
}

export default updateChessBoard
