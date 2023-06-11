import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const deleteRoom = async (_id: string) => {
    try {
        await axios.delete(`${SERVER_URL}/rooms/${_id}`)
    } catch (error) {
        throw error
    }
}

export default deleteRoom
