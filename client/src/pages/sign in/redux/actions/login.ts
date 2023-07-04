import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginFormValues } from 'pages/sign in/types/FormValues'
import { showAlert } from 'ui/components/Alert/redux/alertSlice'
import { isAxiosError } from 'axios'
import { resetChess, updateGame, updateGameId } from 'pages/lobby/modules/chess/redux/actions'
import { Player } from 'types'
import { loginQuery } from 'api/users'

type ResponseType = {
    user: Player
    token: string
}

const login = createAsyncThunk<ResponseType, LoginFormValues>(
    'auth/login',
    async (data, thunkAPI) => {
        const { dispatch } = thunkAPI
        const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

        try {
            const { user, token, chessGame } = await loginQuery(data)

            if (chessGame) {
                const color = chessGame?.white?.username === user?.username ? 'w' : 'b'
                const { white, black, gameId, time, positionHistory, cancelled } = chessGame

                dispatch(resetChess())
                dispatch(updateGameId(gameId))
                dispatch(
                    updateGame({
                        white,
                        black,
                        cancelled,
                        time,
                        color,
                        positionHistory
                    })
                )
            }
            alert(`Authorized as ${user?.username}`, 'success')
            return { user, token }
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data || 'An error occured while trying to log in.'
                alert(message, 'error')
            }
            throw error
        }
    }
)

export default login
