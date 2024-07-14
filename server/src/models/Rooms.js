import { Schema, model } from 'mongoose'
import { ObjectId } from 'mongoose'

const schema = new Schema(
	{
		user: { type: ObjectId, ref: 'USERS', default: null },
		selectedColor: { type: String, required: true },
		actualColor: { type: String, required: true },
		time: { type: String, required: true }
	},
	{ timestamps: true }
)

export default model('ROOMS', schema)
