import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET_KEY

const createToken = (user) => {
	const token = jwt.sign(user, SECRET_KEY)
	return token
}

export default createToken
