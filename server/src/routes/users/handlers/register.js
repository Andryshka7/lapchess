import { hash } from 'bcrypt'
import dotenv from 'dotenv'

import { createToken } from '../../../helpers/index.js'
import { Users } from '../../../models/index.js'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL

const registrationHandler = async (req, res) => {
	try {
		const { username, password } = req.body
		const hashed = await hash(password, 10)

		if (await Users.findOne({ username })) {
			return res.status(400).json('Username already exists.')
		}

		const avatar = `${SERVER_URL}/images/${req.file.filename}`

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
