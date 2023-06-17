import { PayloadAction } from '@reduxjs/toolkit'
import { Auth } from 'pages/sign in/redux/types/Auth'
import { Player } from 'types'

interface AuthPayload {
    user: Player
    token: string
}

const authenticate = (state: Auth, action: PayloadAction<AuthPayload>) => {
    state.user = action.payload.user
    state.token = action.payload.token
}

export default authenticate
