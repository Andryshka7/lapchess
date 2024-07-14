import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'redux/store.ts'

import App from './App.tsx'
import './index.css'

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
