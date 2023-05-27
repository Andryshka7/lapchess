import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { configureStore } from '@reduxjs/toolkit'

import auth from 'components/auth/store/authSlice'
import mastery from 'pages/mastery/store/masterySlice'
import rooms from 'pages/universe/modules/rooms/store/roomsSlice'
import chess from 'pages/universe/modules/chess/store/chessSlice'

const store = configureStore({
    reducer: {
        auth,
        rooms,
        mastery,
        chess
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
