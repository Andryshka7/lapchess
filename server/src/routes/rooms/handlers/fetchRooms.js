import { Rooms } from '../../../models/index.js'

const fetchRooms = async (req, res) => {
    try {
        const rooms = await Rooms.find().populate('user').exec()
        res.status(200).send(rooms)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Error while getting rooms')
    }
}

export default fetchRooms
