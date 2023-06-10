import { Router } from 'express'
import ChessGames from '../models/ChessGames.js'

const chessGamesRouter = Router()

chessGamesRouter.post('/', async (req, res) => {
    try {
        const { white, black, fromRoom, chessBoard } = req.body
        const document = new ChessGames({ white, black, fromRoom, chessBoard })
        await document.save()
        res.status(200).send(document._id)
    } catch (error) {
        res.status(400).json('Error while creating chess game')
    }
})

export default chessGamesRouter
