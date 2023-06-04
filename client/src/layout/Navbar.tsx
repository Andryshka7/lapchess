import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/store'

const NavBar = () => {
    const { username, avatar, token } = useAppSelector((store) => store.auth)

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

            {token ? (
                <div className='flex items-center'>
                    <img src={avatar} className='mr-3 h-8 w-8 rounded-full' alt='' />
                    <h2 className='text-lg font-semibold'>{username}</h2>
                </div>
            ) : (
                <NavLink to='sign-in' className='text-lg font-semibold'>
                    Sign In
                </NavLink>
            )}
        </nav>
    )
}

export default NavBar
