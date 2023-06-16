import { Router } from 'express'
import { ChessGames, Rooms } from '../models/index.js'

const chessGamesRouter = Router()

chessGamesRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const chessGame = await ChessGames.findOne({ gameId: id })
        res.status(200).send(chessGame)
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while fetching chess game')
    }
})

chessGamesRouter.post('/', async (req, res) => {
    try {
        const { white, black, gameId, chessBoard, positionHistory } = req.body
        const document = new ChessGames({ white, black, gameId, chessBoard, positionHistory })
        await document.save()
        res.status(200).send('Succesfully created a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while creating chess game')
    }
})

chessGamesRouter.delete('/:gameId', async (req, res) => {
    try {
        const { gameId } = req.params
        await ChessGames.findOneAndDelete({ gameId })
        res.status(200).json('Succesfully deleted chess game')
    } catch (error) {}
})

export default chessGamesRouter
