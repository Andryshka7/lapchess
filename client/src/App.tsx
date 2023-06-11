import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchRooms } from 'pages/universe/modules/lobby/store/lobbySlice'
import { NavBar, Footer, Alert } from 'layout'
import { Mastery, Universe, SignIn } from 'pages'
import SocketProvider from 'socket/Socket provider/SockerProvider'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRooms())
    }, [])

    return (
        <SocketProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Universe />} />
                    <Route path='/mastery' element={<Mastery />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
                <Alert />
                <Footer />
            </Router>
        </SocketProvider>
    )
}

export default App
