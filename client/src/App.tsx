import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer, Alert, Error } from 'ui'
import { Mastery, Universe, SignIn } from 'pages'
import { fetchLobbyData } from 'pages/lobby/redux/actions'
import SocketProvider from 'socket/Socket provider/SockerProvider'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLobbyData())
    }, [])

    return (
        <SocketProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Universe />} />
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
