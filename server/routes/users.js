import path, { dirname } from 'path'
import dotenv from 'dotenv'
import { rename } from 'fs'
import { Router } from 'express'
import { fileURLToPath } from 'url'
import { hash, compare } from 'bcrypt'
import Users from '../models/Users.js'
import Rooms from '../models/Rooms.js'
import createToken from './helpers/createToken.js'
import upload from './helpers/upload.js'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const usersRouter = Router()

usersRouter.post('/register', upload.single('file'), async (req, res) => {
    try {
        const { username, password } = req.body

        if (await Users.findOne({ username })) {
            return res.status(400).json('Username already exists.')
        }

        const fileName = req.file.filename
        const newFileName = username + fileName.slice(fileName.indexOf('.'))

        const filePath = path.join(__dirname, '..', 'images', fileName)
        const newPath = path.join(__dirname, '..', 'images', newFileName)

        await rename(filePath, newPath, (err) => {
            if (err) throw err
        })

        const hashed = await hash(password, 10)
        const avatar = `${SERVER_URL}/images/${newFileName}`

        const document = await new Users({
            username,
            password: hashed,
            avatar
        }).save()

        const token = createToken({
            username,
            avatar,
            _id: document._id
        })

        const user = { username, avatar, _id: document._id }

        res.status(200).json({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).json('Error while registration.')
    }
})

usersRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body

        const document = await Users.findOne({ username })
        if (!document) return res.status(400).json('Wrong credentials!')

        const passwordMatches = await compare(password, document.password)
        if (!passwordMatches) return res.status(400).json('Wrong credentials!')

        const { avatar, _id } = document

        const token = createToken({ username, avatar, _id })
        const user = { username, avatar, _id }
        const thisRoom = (await Rooms.findOne({ user: _id }))?._id

        res.status(200).json({ user, token, thisRoom })
    } catch (error) {
        console.log(error)
        res.status(400).json('Wrong credentials!')
    }
})

export default usersRouter
