import { Provider } from 'react-redux'
import { Practice } from './pages/practice'
import store from 'redux/store'

function App() {
    return (
        <Provider store={store}>
            <Practice />
        </Provider>
    )
}

export default App
