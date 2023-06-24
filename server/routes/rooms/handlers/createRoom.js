import { Rooms } from '../../../models/index.js'

const createRoom = async (req, res) => {
    try {
        const { user, selectedColor, actualColor, time } = req.body

        const document = await new Rooms({ user, selectedColor, actualColor, time }).save()
        const populated = await Rooms.populate(document, { path: 'user' })

        res.status(200).send(populated)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Error while creating room')
    }
}

export default createRoom
