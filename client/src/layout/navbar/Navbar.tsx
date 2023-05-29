import { NavLink } from 'react-router-dom'
import panda from 'assets/panda.png'

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between w-full px-16 h-14 bg-blue-500'>
            <h1 className='text-2xl font-semibold'>Lapchess</h1>
            <div>
                <NavLink to='/' className='mx-3 text-xl font-medium'>
                    Universe
                </NavLink>
                <NavLink to='/mastery' className='mx-3 text-xl font-medium'>
                    Mastery
                </NavLink>
            </div>

            <div className='flex items-center'>
                <img src={panda} className='h-8 w-8 mr-3 rounded-full' alt='' />
                <h2 className='text-lg font-semibold'>Andryshka16</h2>
            </div>
        </nav>
    )
}

export default NavBar
