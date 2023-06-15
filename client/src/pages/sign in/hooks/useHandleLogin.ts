import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'
import { LoginFormValues } from '../types/FormValues'
import { isAxiosError } from 'axios'
import { authenticate } from 'pages/sign in/redux/actions'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { updateGameId } from 'pages/lobby/redux/actions'
import login from 'api/users/login'

const useHandleLogin = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (data: LoginFormValues) => {
        try {
            const { user, token, myRoomId } = await login(data)

            dispatch(authenticate({ user, token }))
            dispatch(updateGameId(myRoomId))

            navigate('/')
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while trying to log in.', 'error')
            }
        }
    }
}

export default useHandleLogin
