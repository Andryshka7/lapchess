import path, { dirname } from 'path'
import dotenv from 'dotenv'
import { rename } from 'fs'
import { Router } from 'express'
import { fileURLToPath } from 'url'
import { hash, compare } from 'bcrypt'
import Users from '../models/Users.js'
import createToken from '../helpers/jwt/createToken.js'
import upload from '../helpers/multer.js'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const usersRouter = Router()

usersRouter.post('/register', upload.single('file'), async (req, res) => {
    try {
        const { username, password } = req.body

        const fileName = req.file.filename
        const newFileName = username + fileName.slice(fileName.indexOf('.'))

        const filePath = path.join(__dirname, '..', 'images', fileName)
        const newPath = path.join(__dirname, '..', 'images', newFileName)

        await rename(filePath, newPath, (err) => {
            if (err) throw err
        })

        const user = {
            username,
            password: await hash(password, 10),
            avatar: `${SERVER_URL}/images/${newFileName}`
        }
        const token = createToken(user)

        await Users.create(user)

        res.status(200).json({ user, token })
    } catch (error) {
        res.status(400).json('Error while registration.')
    }
})

usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await Users.findOne({ username })
        const passwordMatches = await compare(password, user.password)
        if (passwordMatches) {
            const token = createToken({ username, password, avatar: user.avatar })
            res.status(200).json({ user, token })
        } else {
            res.status(400).json('Wrong credentials!')
        }
    } catch (error) {
        res.status(400).json('Wrong credentials!')
    }
})

export default usersRouter
