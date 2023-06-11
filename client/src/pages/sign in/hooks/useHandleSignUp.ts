import { isAxiosError } from 'axios'
import { SignUpFormValues } from '../types/form fields/SignUpFormValues'
import { useAppDispatch } from 'redux/store'
import { authenticate } from 'pages/sign in/store/authSlice'
import { useNavigate } from 'react-router-dom'
import { showAlert } from 'layout/alert/store/alertSlice'
import signUp from 'api/users/signUp'

const useHandleSignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (data: SignUpFormValues, file: File) => {
        try {
            const formData = new FormData()

            formData.append('file', file)
            formData.append('username', data.username)
            formData.append('password', data.password)

            const { user, token } = await signUp(formData)

            dispatch(authenticate({ user, token }))

            navigate('/')
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while registration.', 'error')
            }
        }
    }
}

export default useHandleSignUp
