import { Router } from 'express'

import restartGame from './handlers/restartGame.js'
import resignGame from './handlers/resignGame.js'
import updateChessBoard from './handlers/updateChessBoard.js'

const updateRouter = Router()

updateRouter.post('/restartGame/:gameId', restartGame)
updateRouter.post('/updateChessBoard/:gameId', updateChessBoard)
updateRouter.post('/resignGame/:gameId', resignGame)

export default updateRouter
