import axios from 'axios'
import { Player } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
}

interface ReponseType {
    user: Player
    token: string
}

const signUp = async (data: FormData) => {
    try {
        const response = await axios.post<ReponseType>(`${SERVER_URL}/users/register`, data, config)
        return response.data
    } catch (error) {
        throw error
    }
}

export default signUp
