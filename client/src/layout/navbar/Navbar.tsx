import { NavLink } from 'react-router-dom'
import Auth from './auth/Auth'

const NavBar = () => {
    return (
        <nav className='flex h-14 w-full items-center justify-between bg-blue-500 px-16'>
            <h1 className='text-2xl font-semibold'>Lapchess</h1>
            <div>
                <NavLink to='/' className='mx-3 text-xl font-medium'>
                    Universe
                </NavLink>
                <NavLink to='/mastery' className='mx-3 text-xl font-medium'>
                    Mastery
                </NavLink>
            </div>
            <Auth />
        </nav>
    )
}

export default NavBar
