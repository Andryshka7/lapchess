import { resetChess } from 'pages/lobby/modules/chess/redux/actions'
import { logout } from 'pages/sign in/redux/actions'
import { TbLogout } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/store'
import socket from 'socket'
import { useShowAlert } from 'ui/components/Alert/hooks'

const Auth = () => {
	const dispatch = useAppDispatch()
	const alert = useShowAlert()

	const { user } = useAppSelector((store) => store.auth)
	const gameId = useAppSelector((store) => store.chess.gameId)

	return user ? (
		<div className="flex items-center gap-3">
			<img src={user.avatar} className="h-8 w-8 rounded-full object-cover" />
			<h2 className="text-lg font-semibold">{user.username}</h2>
			<TbLogout
				size={25}
				className="cursor-pointer transition duration-200 hover:scale-110"
				onClick={() => {
					dispatch(logout())
					dispatch(resetChess())
					alert('Successfully logged out', 'success')
					socket.emit('LEAVE_ROOM', gameId)
				}}
			/>
		</div>
	) : (
		<NavLink
			to="sign-in"
			className="hidden rounded-md border-2 border-white px-3 py-px text-lg font-semibold md:flex"
		>
			Sign In
		</NavLink>
	)
}

export default Auth
