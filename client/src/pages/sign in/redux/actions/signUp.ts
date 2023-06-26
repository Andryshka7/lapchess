import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { Player } from 'types'
import API from 'api'

interface ReturnType {
    user: Player
    token: string
}

const signUp = createAsyncThunk<ReturnType, FormData>('auth/register', async (data, thunkAPI) => {
    const { dispatch } = thunkAPI

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    try {
        const { user, token } = await API.signUp(data)
        return { user, token }
    } catch (error) {
        if (isAxiosError(error)) {
            const message = error.response?.data || 'An error occured while trying to log in.'
            alert(message, 'error')
        }
        throw error
    }
})

export default signUp
