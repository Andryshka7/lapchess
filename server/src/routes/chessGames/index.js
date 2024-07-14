import { Router } from 'express'

import createGame from './handlers/createGame.js'
import deleteGame from './handlers/deleteGame.js'
import fetchGame from './handlers/fetchGame.js'
import updateRouter from './handlers/updateGame/index.js'

const chessGamesRouter = Router()

chessGamesRouter.get('/:gameId', fetchGame)
chessGamesRouter.put('/', createGame)
chessGamesRouter.delete('/:gameId', deleteGame)

chessGamesRouter.use('/', updateRouter)

export default chessGamesRouter
