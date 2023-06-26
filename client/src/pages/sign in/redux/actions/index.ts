import authSlice from '../authSlice'

export { default as login } from './login'
export { default as signUp } from './signUp'

export const { logout } = authSlice.actions
