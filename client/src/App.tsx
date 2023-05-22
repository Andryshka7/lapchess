import { Provider } from 'react-redux'
import { Practice } from './pages/practice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import store from 'redux/store'

function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Practice />} />
                        <Route path='/mastery' element={<Practice />} />
                    </Routes>
                    <Footer />
                </Router>
            </Provider>
        </div>
    )
}

export default App
