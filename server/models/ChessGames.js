import { model, Schema, ObjectId } from 'mongoose'

const chessGameSchema = new Schema({
    white: { type: ObjectId, ref: 'USERS' },
    black: { type: ObjectId, ref: 'USERS' },
    gameId: { type: String, required: true },
    time: { type: String, required: true },
    positionHistory: { type: Array, required: true }
})

export default model('CHESSGAMES', chessGameSchema)
