import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from 'redux/store.ts'
import './index.css'

Array.prototype.includesDeeply = function (element) {
    return this.some((item) => JSON.stringify(item) === JSON.stringify(element))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
)
