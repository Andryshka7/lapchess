import { ChessGames } from '../../../models/index.js'

const fetchGame = async (req, res) => {
    try {
        const { gameId } = req.params
        const chessGame = await ChessGames.findOne({ gameId })
            .populate('white')
            .populate('black')
            .exec()
        res.status(200).send(chessGame)
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while fetching chess game')
    }
}

export default fetchGame
