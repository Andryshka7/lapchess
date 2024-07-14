import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true }
})

export default model('USERS', userSchema)
