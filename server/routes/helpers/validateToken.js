import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET_KEY

const validateToken = (req, res, next) => {
    const token = req.headers.authorization
    try {
        const user = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY)
        req.user = user
    } catch (error) {
        console.log(error.message)
    }

    next()
}

export default validateToken
