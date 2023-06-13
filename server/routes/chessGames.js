import { Router } from 'express'
import ChessGames from '../models/ChessGames.js'

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

export default chessGamesRouter
