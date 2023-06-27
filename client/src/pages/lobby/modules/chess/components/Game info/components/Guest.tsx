import GuestAvatar from 'assets/images/Guest.png'
import { useAppSelector } from 'redux/store'
import WhiteTimer from './Time/WhiteTimer'
import BlackTimer from './Time/BlackTimer'

const Guest = () => {
    const { white, black, color } = useAppSelector((store) => store.chess)

    const user = color === 'w' ? black : white

    const username = user?.username || 'Guest'
    const avatar = user?.avatar || GuestAvatar

    return (
        <div className='flex w-full items-center justify-between p-4'>
            <div className='flex items-center'>
                <img src={avatar} className='h-8 w-8 rounded-full object-cover' alt='' />
                <h3 className='ml-3 text-lg font-medium'>{username}</h3>
            </div>
            {color === 'w' ? <BlackTimer /> : <WhiteTimer />}
        </div>
    )
}

export default Guest
