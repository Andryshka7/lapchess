import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const getRooms = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/rooms`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default getRooms
