import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/store'

const Auth = () => {
    const { user } = useAppSelector((store) => store.auth)

    if (!user)
        return (
            <NavLink to='sign-in' className='text-lg font-semibold'>
                Sign In
            </NavLink>
        )

    const { username, avatar } = user

    return (
        <div className='flex items-center'>
            <img src={avatar} className='mr-3 h-8 w-8 rounded-full' alt='' />
            <h2 className='text-lg font-semibold'>{username}</h2>
        </div>
    )
}
export default Auth
