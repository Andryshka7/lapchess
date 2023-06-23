import path, { dirname } from 'path'
import { rename } from 'fs'
import { fileURLToPath } from 'url'
import { hash } from 'bcrypt'
import { Users } from '../../../models/index.js'
import { createToken } from '../../../helpers/index.js'
import dotenv from 'dotenv'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const registrationHandler = async (req, res) => {
    try {
        const { username, password } = req.body

        if (await Users.findOne({ username })) {
            return res.status(400).json('Username already exists.')
        }

        const fileName = req.file.filename
        const newFileName = username + fileName.slice(fileName.indexOf('.'))

        const filePath = path.join(__dirname, '..', '..', '..', 'images', fileName)
        const newPath = path.join(__dirname, '..', '..', '..', 'images', newFileName)

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
}

export default registrationHandler
