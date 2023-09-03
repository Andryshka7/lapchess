import { useAppSelector } from 'redux/store'
import { DeleteIcon, PlayIcon } from './components'
import { Room as RoomType } from 'types'
import GuestAvatar from 'assets/images/Guest.png'

const Room = (room: RoomType) => {
    const gameId = useAppSelector((store) => store.chess.gameId)

    const { user, selectedColor, time, _id } = room

    const username = user?.username || 'Guest'
    const avatar = user?.avatar || GuestAvatar

    return (
        <div
            className='relative mb-1.5 flex h-[52px] items-center justify-between rounded-lg bg-white bg-opacity-5 px-6 sm:px-10'
            key={_id}
        >
            <div className='flex items-center justify-start gap-2.5'>
                <img src={avatar} className='aspect-square h-[30px] rounded-full object-cover' />
                <h2 className='text-base font-semibold'>{username}</h2>
            </div>

            <div className='xs:w-[53%] flex w-1/2 items-center justify-between sm:w-7/12 md:w-3/5'>
                <img src={`roomColors/${selectedColor}.png`} className='h-[30px] w-[30px]' />
                <p className='text-base font-semibold'>{time}</p>
                {_id === gameId ? <DeleteIcon {...room} /> : <PlayIcon {...room} />}
            </div>
        </div>
    )
}

export default Room
