import { Router } from 'express'

import { upload } from '../../helpers/index.js'
import loginHandler from './handlers/login.js'
import registrationHandler from './handlers/register.js'

const usersRouter = Router()

usersRouter.post('/register', upload.single('file'), registrationHandler)
usersRouter.post('/login', loginHandler)

export default usersRouter
