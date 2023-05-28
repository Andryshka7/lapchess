import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'
import { deleteRoom, fetchRooms, newRoom } from 'pages/universe/modules/rooms/store/roomsSlice'
import NavBar from 'components/Navbar'
import Universe from 'pages/universe/Universe'
import Mastery from './pages/mastery/Mastery'
import Footer from 'components/Footer'
import socket from 'socket/socket'
import { Room } from 'pages/universe/types/Room'
import Alert from 'components/alert/Alert'

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
            <div className='flex flex-col min-h-screen'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Universe />} />
                    <Route path='/mastery' element={<Mastery />} />
                </Routes>
                <Alert />
                <Footer />
            </div>
        </Router>
    )
}

export default App
