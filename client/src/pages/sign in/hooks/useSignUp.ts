import axios, { isAxiosError } from 'axios'
import { SignUpFormValues } from '../types/form fields/SignUpFormValues'
import { useAppDispatch } from 'redux/store'
import { authenticate } from 'pages/sign in/store/authSlice'
import { useNavigate } from 'react-router-dom'
import { showAlert } from 'layout/alert/store/alertSlice'
import { fetchMyRoom } from 'pages/universe/modules/lobby/store/lobbySlice'

interface Reponse {
    user: {
        username: string
        avatar: string
        _id: string
    }
    token: string
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
}

const useSignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (data: SignUpFormValues, file: File) => {
        try {
            const formData = new FormData()

            formData.append('file', file)
            formData.append('username', data.username)
            formData.append('password', data.password)

            const response = await axios.post<Reponse>(
                `${SERVER_URL}/users/register`,
                formData,
                config
            )
            const { user, token } = response.data

            dispatch(authenticate({ user, token }))

            navigate('/')
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while registration.', 'error')
            }
        }
    }
}

export default useSignUp
