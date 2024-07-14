import { Lobby, Mastery, SignIn } from 'pages'
import { fetchGame } from 'pages/lobby/modules/chess/redux/actions'
import { fetchRooms } from 'pages/lobby/modules/rooms/redux/actions'
import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'
import SocketProvider from 'socket/Socket provider/SocketProvider'
import { Alert, Error, Footer, NavBar } from 'ui'

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
					<Route path="/" element={<Lobby />} />
					<Route path="/mastery" element={<Mastery />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/*" element={<Error />} />
				</Routes>
				<Alert />
				<Footer />
			</Router>
		</SocketProvider>
	)
}

export default App
