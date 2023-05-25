import { Provider } from 'react-redux'
import { Mastery } from './pages/mastery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from 'components/Navbar'
import Footer from 'components/Footer'
import store from 'redux/store'
import Universe from 'pages/universe/Universe'

function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Universe />} />
                        <Route path='/mastery' element={<Mastery />} />
                    </Routes>
                    <Footer />
                </Router>
            </Provider>
        </div>
    )
}

export default App
