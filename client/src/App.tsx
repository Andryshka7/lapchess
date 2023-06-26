import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer, Alert, Error } from 'ui'
import { Mastery, Lobby, SignIn } from 'pages'
import { fetchRooms } from 'pages/lobby/modules/rooms/redux/actions'
import { fetchGame } from 'pages/lobby/modules/chess/redux/actions'
import SocketProvider from 'socket/Socket provider/SocketProvider'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGame())
        dispatch(fetchRooms())
    }, [])

    return (
        <SocketProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Lobby />} />
                    <Route path='/mastery' element={<Mastery />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
                <Alert />
                <Footer />
            </Router>
        </SocketProvider>
    )
}

export default App
