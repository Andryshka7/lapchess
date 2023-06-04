import { model, Schema } from 'mongoose'
import { ObjectId } from 'mongoose'

const schema = new Schema(
    {
        user: { type: ObjectId, ref: 'USERS' },
        color: { type: String, required: true },
        time: { type: String, required: true }
    },
    { timestamps: true }
)

export default model('ROOMS', schema)
