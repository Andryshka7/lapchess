import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    avatar: { type: String, required: true },
    username: { type: String, required: true }
})

const schema = new Schema(
    {
        user: { type: userSchema, required: true },
        color: { type: String, required: true },
        time: { type: String, required: true },
        id: { type: String, required: true }
    },
    { timestamps: true }
)

export default model('ROOMS', schema)
