import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { TbLogout } from 'react-icons/tb'
import { logout } from 'pages/sign in/redux/actions'
import { resetChess } from 'pages/lobby/redux/actions'

const NavBar = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((store) => store.auth)

    return (
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

            {user ? (
                <div className='flex items-center gap-3'>
                    <img src={user.avatar} className='h-8 w-8 rounded-full object-cover' alt='' />
                    <h2 className='text-lg font-semibold'>{user.username}</h2>
                    <TbLogout
                        size={25}
                        className='cursor-pointer transition duration-200 hover:scale-110'
                        onClick={() => {
                            dispatch(logout())
                            dispatch(resetChess())
                        }}
                    />
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
