import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from 'pages/sign in/store/authSlice'
import alert from 'layout/alert/store/alertSlice'
import mastery from 'pages/mastery/store/masterySlice'
import lobby from 'pages/universe/modules/lobby/store/lobbySlice'
import chess from 'pages/universe/modules/chess/store/chessSlice'

const persistConfig = {
    key: 'root',
    storage: storage
}

const rootReducer = combineReducers({
    auth,
    alert,
    lobby,
    mastery,
    chess
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

const persistor = persistStore(store)

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export { store, persistor }
