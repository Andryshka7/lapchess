import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'
import { LoginFormValues } from '../types/form fields/LoginFormValues'
import { isAxiosError } from 'axios'
import { authenticate } from 'pages/sign in/store/authSlice'
import { setThisRoom } from 'pages/universe/modules/lobby/store/lobbySlice'
import { showAlert } from 'layout/alert/store/alertSlice'
import login from 'api/users/login'

const useHandleLogin = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (data: LoginFormValues) => {
        try {
            const { user, token, thisRoom } = await login(data)

            dispatch(authenticate({ user, token }))
            dispatch(setThisRoom(thisRoom))

            navigate('/')
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while trying to log in.', 'error')
            }
        }
    }
}

export default useHandleLogin
