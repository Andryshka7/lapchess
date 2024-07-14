import { Rooms } from '../../../models/index.js'

const deleteRoom = async (req, res) => {
	try {
		const { id } = req.params
		await Rooms.findByIdAndDelete(id)
		res.status(200).send('Room has been deleted')
	} catch (error) {
		console.log(error.message)
		res.status(400).send('Error deleting this room')
	}
}

export default deleteRoom
