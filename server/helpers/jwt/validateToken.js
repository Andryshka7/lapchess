import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET_KEY

const validateToken = (req, res, next) => {
    const token = req.cookies['acess-token']
    if (!token) return res.status(400).json('User not logged in!')

    try {
        const isValid = jwt.verify(token, SECRET_KEY)
        if (isValid) next()
    } catch (error) {
        res.status(400).json(error)
    }
}

export default validateToken
