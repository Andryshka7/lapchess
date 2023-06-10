import { model, Schema } from 'mongoose'
import { ObjectId } from 'mongoose'

const chessGameSchema = new Schema(
    {
        white: { type: ObjectId, ref: 'USERS' },
        black: { type: ObjectId, ref: 'USERS' },
        fromRoom: { type: String, required: true },
        chessBoard: { type: String, required: true }
        // positionHistory: { type: Array, required: true }
    },
    { timestamps: true }
)

export default model('CHESSGAMES', chessGameSchema)
