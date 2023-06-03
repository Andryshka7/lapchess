import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { deleteRoom, fetchRooms, newRoom } from 'pages/universe/modules/lobby/store/lobbySlice'
import { NavBar, Footer, Alert } from 'layout'
import { Mastery, Universe } from 'pages'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import socket from 'socket/socket'
import SignIn from 'pages/sign in/SignIn'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('NEW_ROOM', (room: Room) => {
            dispatch(newRoom(room))
        })
        socket.on('DELETE_ROOM', (id: string) => {
            dispatch(deleteRoom(id))
        })
        dispatch(fetchRooms())
    }, [])

    return (
        <Router>
            <div className='flex min-h-screen flex-col'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Universe />} />
                    <Route path='/mastery' element={<Mastery />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
                <Alert />
                <Footer />
            </div>
        </Router>
    )
}

export default App
