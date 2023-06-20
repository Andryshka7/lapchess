import { ChessGames } from '../../../models/index.js'

const deleteGame = async (req, res) => {
    try {
        const { gameId } = req.params
        await ChessGames.findOneAndDelete({ gameId })
        res.status(200).json('Succesfully deleted chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while deleting chess game')
    }
}

export default deleteGame
