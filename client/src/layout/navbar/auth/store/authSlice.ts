import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../types/InitialState'
import { User } from '../types/User'

const initialState: InitialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export default authSlice.reducer
export const { authenticate, setToken } = authSlice.actions
