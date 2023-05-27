import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    avatar: 'some_avatar_url',
    username: 'Andryshka16'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export default authSlice.reducer
