import { ObjectId, Schema, model } from 'mongoose'

const chessGameSchema = new Schema({
	white: { type: ObjectId, ref: 'USERS' },
	black: { type: ObjectId, ref: 'USERS' },
	gameId: { type: String, required: true },
	time: { type: Object, required: true },
	positionHistory: { type: [Object], required: true },
	cancelled: { type: Boolean }
})

export default model('CHESSGAMES', chessGameSchema)
