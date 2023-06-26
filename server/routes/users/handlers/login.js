import { compare } from 'bcrypt'
import { createToken } from '../../../helpers/index.js'
import { Users, Rooms, ChessGames } from '../../../models/index.js'

const loginHandler = async (req, res) => {
    try {
        const { username, password } = req.body

        const document = await Users.findOne({ username })
        if (!document) return res.status(400).json('Wrong credentials!')

        const passwordMatches = await compare(password, document.password)
        if (!passwordMatches) return res.status(400).json('Wrong credentials!')

        const { avatar, _id } = document

        const token = createToken({ username, avatar, _id })
        const user = { username, avatar, _id }

        const filter = { $or: [{ white: _id }, { black: _id }] }

        const chessGame = await ChessGames.findOne(filter)
            .populate('white')
            .populate('black')
            .exec()

        res.status(200).json({ user, token, chessGame })
    } catch (error) {
        console.log(error)
        res.status(400).json('Wrong credentials!')
    }
}
export default loginHandler
