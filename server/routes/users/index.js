import { Router } from 'express'
import registrationHandler from './handlers/register.js'
import loginHandler from './handlers/login.js'
import { upload } from '../../helpers/index.js'

const usersRouter = Router()

usersRouter.post('/register', upload.single('file'), registrationHandler)
usersRouter.post('/login', loginHandler)

export default usersRouter
