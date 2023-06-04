import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../types/User'

const initialState: User = {
    username: null,
    avatar: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (_, action: PayloadAction<User>) => {
            return action.payload
        },
        logOut: () => initialState
    }
})

export default authSlice.reducer
export const { authenticate, logOut } = authSlice.actions
