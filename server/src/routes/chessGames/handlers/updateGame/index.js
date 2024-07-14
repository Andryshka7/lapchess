import { Router } from 'express'

import cancelGame from './handlers/cancelGame.js'
import drawGame from './handlers/drawGame.js'
import resignGame from './handlers/resignGame.js'
import restartGame from './handlers/restartGame.js'
import updateGame from './handlers/updateGame.js'

const updateRouter = Router()

updateRouter.post('/drawGame/:gameId', drawGame)
updateRouter.post('/restartGame/:gameId', restartGame)
updateRouter.post('/resignGame/:gameId', resignGame)
updateRouter.post('/updateGame/:gameId', updateGame)
updateRouter.post('/cancelGame/:gameId', cancelGame)

export default updateRouter
