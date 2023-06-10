import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/store'

const NavBar = () => {
    const { user } = useAppSelector((store) => store.auth)

    return (
        <nav className='flex h-14 w-full items-center justify-between bg-blue-500 px-16'>
            <NavLink to='/' className='text-2xl font-semibold'>
                Lapchess
            </NavLink>
            <div>
                <NavLink to='/' className='mx-3 text-xl font-medium'>
                    Universe
                </NavLink>
                <NavLink to='/mastery' className='mx-3 text-xl font-medium'>
                    Mastery
                </NavLink>
            </div>

            {user ? (
                <div className='flex items-center'>
                    <img
                        src={user.avatar}
                        className='mr-3 h-8 w-8 rounded-full object-cover'
                        alt=''
                    />
                    <h2 className='text-lg font-semibold'>{user.username}</h2>
                </div>
            ) : (
                <NavLink to='sign-in' className='text-lg font-semibold'>
                    Sign In
                </NavLink>
            )}
            <button
                onClick={() => {
                    localStorage.clear()
                    location.reload()
                }}
            >
                Logout
            </button>
        </nav>
    )
}

export default NavBar
