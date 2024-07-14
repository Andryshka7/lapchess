import { createAsyncThunk } from '@reduxjs/toolkit'
import { signUpQuery } from 'api/users'
import { isAxiosError } from 'axios'
import { resetChess } from 'pages/lobby/modules/chess/redux/actions'
import { Player } from 'types'
import { showAlert } from 'ui/components/Alert/redux/alertSlice'

interface ReturnType {
	user: Player
	token: string
}

const signUp = createAsyncThunk<ReturnType, FormData>('auth/register', async (data, thunkAPI) => {
	const { dispatch } = thunkAPI

	const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

	try {
		const { user, token } = await signUpQuery(data)
		dispatch(resetChess())
		alert(`Authorized as ${user?.username}`, 'success')

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
