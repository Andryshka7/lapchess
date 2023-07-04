import masterySlice from 'pages/mastery/redux/masterySlice'
import roomsSlice from 'pages/lobby/modules/rooms/redux/roomsSlice'
import chessSlice from 'pages/lobby/modules/chess/redux/chessSlice'
import alertSlice from 'ui/components/Alert/redux/alertSlice'
import authSlice from 'pages/sign in/redux/authSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const mastery = masterySlice.reducer
export const chess = chessSlice.reducer
export const rooms = roomsSlice.reducer
export const alert = alertSlice.reducer
export const auth = authSlice.reducer

export default combineReducers({
    auth,
    alert,
    rooms,
    chess,
    mastery
})
