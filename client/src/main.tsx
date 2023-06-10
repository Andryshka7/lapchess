import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store.ts'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

Array.prototype.includesDeeply = function (element) {
    return this.some((item) => JSON.stringify(item) === JSON.stringify(element))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
