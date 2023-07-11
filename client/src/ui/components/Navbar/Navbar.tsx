import { NavLink } from 'react-router-dom'
import Auth from './components/Auth'

const NavBar = () => (
    <nav className='flex h-14 w-full items-center justify-between bg-blue-500 px-16'>
        <NavLink to='/' className='text-2xl font-semibold'>
            Lapchess
        </NavLink>

        <div className='flex gap-6'>
            <NavLink to='/' className='text-xl font-medium'>
                Lobby
            </NavLink>
            <NavLink to='/mastery' className='text-xl font-medium'>
                Mastery
            </NavLink>
        </div>

        <Auth />
    </nav>
)

export default NavBar
