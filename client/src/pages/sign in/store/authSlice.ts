import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../types/InitialState'

interface AuthPayload {
    user: {
        username: string
        avatar: string
        _id: string
    }
    token: string
}

const initialState: InitialState = {
    user: null,
    token: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<AuthPayload>) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logOut: () => initialState
    }
})

export default authSlice.reducer
export const { authenticate, logOut } = authSlice.actions
