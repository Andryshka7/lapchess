import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { configureStore } from '@reduxjs/toolkit'
import rooms from 'pages/universe/modules/rooms/store/roomsSlice'
import { mastery } from 'pages/mastery'

const store = configureStore({
    reducer: {
        rooms,
        mastery
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
