import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState/initialState'
import reducers from './reducers'

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers
})

export default authSlice
