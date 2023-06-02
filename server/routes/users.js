import { hash, compare } from 'bcrypt'
import { Router } from 'express'
import Users from '../models/Users.js'
import createToken from './jwt/createToken.js'

const usersRouter = Router()

usersRouter.post('/register', async (req, res) => {
    const { username, password } = req.body
    const encrypted = await hash(password, 10)

    await Users.create({ username, password: encrypted })

    res.cookie('acess-token', createToken({ username, password }))
    res.status(200).json('User has been created.')
})

usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await Users.findOne({ username })
        const passwordMatches = await compare(password, user.password)
        if (passwordMatches) {
            res.cookie('acess-token', createToken({ username, password }))
            res.status(200).json('Logged in!')
        } else {
            res.status(400).json('Wrong credentials!')
        }
    } catch (error) {
        res.status(400).json('Wrong credentials!')
    }
})

export default usersRouter
