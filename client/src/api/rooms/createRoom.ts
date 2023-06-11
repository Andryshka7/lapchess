import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const createRoom = async (user: string | null, color: string, time: string) => {
    try {
        const response = await axios.post<string>(`${SERVER_URL}/rooms`, {
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
