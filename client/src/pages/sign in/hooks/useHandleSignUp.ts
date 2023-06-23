import { isAxiosError } from 'axios'
import { SignUpFormValues } from '../types/FormValues'
import { useAppDispatch } from 'redux/store'
import { authenticate } from 'pages/sign in/redux/actions'
import { useNavigate } from 'react-router-dom'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { signUp } from 'api/users'
import { useState } from 'react'

const useHandleSignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const handleSignUp = async (data: SignUpFormValues, file: File) => {
        try {
            setLoading(true)

            const formData = new FormData()

            formData.append('file', file)
            formData.append('username', data.username)
            formData.append('password', data.password)

            const { user, token } = await signUp(formData)

            dispatch(authenticate({ user, token }))
            setLoading(false)

            navigate('/')
        } catch (error) {
            setLoading(false)
            if (isAxiosError(error)) {
                alert(error.response?.data || 'An error occured while registration.', 'error')
            }
        }
    }

    return { loading, handleSignUp }
}

export default useHandleSignUp
