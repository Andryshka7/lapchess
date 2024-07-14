import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

import Auth from './components/Auth'
import MobileNavbar from './components/MobileNavbar'

const NavBar = () => {
	const [showMobileNavbar, setShowMobileNavbar] = useState(false)

	return (
		<nav className="flex h-14 w-full items-center justify-between bg-blue-500 px-8 md:px-12 lg:px-16">
			<NavLink to="/" className="flex items-center gap-2">
				<img src="/favicon.png" className="h-8 object-contain" />
				<h1 className="text-2xl font-bold">Lapchess</h1>
			</NavLink>

			<div className="hidden gap-6 md:flex">
				<NavLink to="/" className="text-xl font-semibold">
					Lobby
				</NavLink>
				<NavLink to="/mastery" className="text-xl font-semibold">
					Mastery
				</NavLink>
			</div>

			<div className="hidden md:flex">
				<Auth />
			</div>
			<IoMenu
				color="white"
				size={35}
				className="md:hidden"
				onClick={() => setShowMobileNavbar((p) => !p)}
			/>
			<MobileNavbar
				showMobileNavbar={showMobileNavbar}
				setShowMobileNavbar={setShowMobileNavbar}
			/>
		</nav>
	)
}

export default NavBar
