import { hash } from 'bcrypt'
import { Users } from '../../../models/index.js'
import { createToken, imageKit } from '../../../helpers/index.js'
import dotenv from 'dotenv'

dotenv.config()

const registrationHandler = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashed = await hash(password, 10)

        if (await Users.findOne({ username })) {
            return res.status(400).json('Username already exists.')
        }

        const fileName = req.file.originalname
        const { url: avatar } = await imageKit.upload({ file: req.file.buffer, fileName })

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
