import { useAppSelector } from 'redux/store'
import { DeleteIcon, PlayIcon } from './components'
import { Room as RoomType } from 'types'
import GuestAvatar from 'assets/images/Guest.png'

const Room = (room: RoomType) => {
    const { gameId } = useAppSelector((store) => store.chess)

    const { user, selectedColor, time, _id } = room

    const username = user?.username || 'Guest'
    const avatar = user?.avatar || GuestAvatar

    return (
        <div
            className='relative mb-1.5 grid h-[52px] grid-cols-3 items-center rounded-lg bg-white bg-opacity-5 px-10'
            key={_id}
        >
            <div className='flex items-center'>
                <img src={avatar} className='h-[30px] w-[30px] rounded-full object-cover' />
                <h2 className='ml-3 text-base font-semibold'>{username}</h2>
            </div>

            <img src={`${selectedColor}.png`} className='h-[30px] w-[30px]' />
            <p className='text-base font-semibold'>{time}</p>

            {_id === gameId ? <DeleteIcon {...room} /> : <PlayIcon {...room} />}
        </div>
    )
}

export default Room
