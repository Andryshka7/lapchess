import masterySlice from 'pages/mastery/redux/masterySlice'
import lobbySlice from 'pages/lobby/redux/lobbySlice'
import alertSlice from 'ui/components/alert/redux/alertSlice'
import authSlice from 'pages/sign in/redux/authSlice'

export const mastery = masterySlice.reducer
export const lobby = lobbySlice.reducer
export const alert = alertSlice.reducer
export const auth = authSlice.reducer
