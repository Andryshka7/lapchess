import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
}

interface Reponse {
    user: {
        username: string
        avatar: string
        _id: string
    }
    token: string
}

const signUp = async (data: FormData) => {
    try {
        const response = await axios.post<Reponse>(`${SERVER_URL}/users/register`, data, config)
        return response.data
    } catch (error) {
        throw error
    }
}

export default signUp
