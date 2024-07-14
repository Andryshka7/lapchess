import { createSlice } from '@reduxjs/toolkit'

import login from './actions/login'
import signUp from './actions/signUp'
import initialState from './initialState/initialState'

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers: (builder) =>
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				const { user, token } = action.payload
				state.user = user
				state.token = token
			})
			.addCase(login.rejected, (state) => {
				state.loading = false
			})

			.addCase(signUp.pending, (state) => {
				state.loading = true
			})
			.addCase(signUp.fulfilled, (state, action) => {
				const { user, token } = action.payload
				state.user = user
				state.token = token
			})
			.addCase(signUp.rejected, (state) => {
				state.loading = false
			})
})

export default authSlice
