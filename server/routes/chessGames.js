import { Router } from 'express'
import ChessGames from '../models/ChessGames.js'

const chessGamesRouter = Router()

chessGamesRouter.post('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const document = await ChessGames.findOne({ gameId: id })

        document.chessBoard.gameField = req.body.gameField
        document.chessBoard.turn = req.body.turn
        document.chessBoard.enpassing = req.body.enpassing
        document.chessBoard.castling = req.body.castling
        document.chessBoard.checkStatus = req.body.checkStatus
        document.chessBoard.chessMoves = req.body.chessMoves

        await document.save()
        res.status(200).send('Successfully modified chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while modifying chess game')
    }
})

chessGamesRouter.post('/', async (req, res) => {
    try {
        const { white, black, gameId, chessBoard } = req.body
        const document = new ChessGames({ white, black, gameId, chessBoard })
        await document.save()
        res.status(200).send('Succesfully created a chess game')
    } catch (error) {
        console.log(error.message)
        res.status(400).json('Error while creating chess game')
    }
})

export default chessGamesRouter
