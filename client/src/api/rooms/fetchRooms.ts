import axios from 'axios'
import { Room } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const fecthRooms = async () => {
    try {
        const response = await axios.get<Room[]>(`${SERVER_URL}/rooms`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default fecthRooms
