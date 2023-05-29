import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { configureStore } from '@reduxjs/toolkit'

import auth from 'layout/navbar/auth/store/authSlice'
import alert from 'layout/alert/store/alertSlice'
import mastery from 'pages/mastery/store/masterySlice'
import lobby from 'pages/universe/modules/lobby/store/lobbySlice'
import chess from 'pages/universe/modules/chess/store/chessSlice'

const store = configureStore({
    reducer: {
        auth,
        alert,
        lobby,
        mastery,
        chess
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
