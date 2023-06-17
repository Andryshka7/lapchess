import axios from 'axios'
import { Room } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const createRoom = async (user: string | null, color: string, time: string) => {
    try {
        const response = await axios.post<Room>(`${SERVER_URL}/rooms`, {
            user,
            color,
            time
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export default createRoom
