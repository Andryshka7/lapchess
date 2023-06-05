import axios, { AxiosError, isAxiosError } from 'axios'
import { SignUpFormValues } from '../types/form fields/SignUpFormValues'
import { useAppDispatch } from 'redux/store'
import { authenticate } from 'pages/sign in/store/authSlice'
import { useNavigate } from 'react-router-dom'
import { User } from 'pages/sign in/types/User'
import { showAlert } from 'layout/alert/store/alertSlice'

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

            const response = await axios.post<User>(
                `${SERVER_URL}/users/register`,
                formData,
                config
            )

            const user = response.data

            dispatch(authenticate(user))
            navigate('/')
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while registration.', 'error')
            }
        }
    }
}

export default useSignUp
