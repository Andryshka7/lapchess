import GuestAvatar from 'assets/images/Guest.png'
import { useAppSelector } from 'redux/store'
import { opposite } from 'helpers'
import Timer from './Time/Timer'

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
            <Timer color={opposite(color as 'w' | 'b')} />
        </div>
    )
}

export default Guest
