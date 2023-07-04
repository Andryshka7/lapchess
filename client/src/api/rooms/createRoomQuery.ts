import axios from 'axios'
import { Room } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const createRoomQuery = async (
    user: string | null,
    selectedColor: string,
    actualColor: string,
    time: string
) => {
    try {
        const payload = { user, selectedColor, actualColor, time }
        const response = await axios.post<Room>(`${SERVER_URL}/rooms`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

export default createRoomQuery
