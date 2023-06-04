import { Room as IRoom } from 'pages/universe/modules/lobby/types/Room'
import { useAppSelector } from 'redux/store'
import DeleteIcon from './components/DeleteIcon'
import PlayIcon from './components/PlayIcon'
import Guest from 'assets/Guest.png'

const Room = ({ user, color, time, _id }: IRoom) => {
    const { thisRoom } = useAppSelector((store) => store.lobby)

    const username = user?.username || 'Guest'
    const avatar = user?.avatar || Guest

    return (
        <div
            className='relative mb-1.5 grid h-[52px] grid-cols-3 items-center rounded-lg bg-white bg-opacity-5 px-10'
            key={_id}
        >
            <div className='flex items-center'>
                <img src={avatar} className='h-[30px] w-[30px] rounded-full' />
                <h2 className='ml-3 text-base font-semibold'>{username}</h2>
            </div>

            <img src={`${color}.png`} className='h-[30px] w-[30px]' />
            <p className='text-base font-semibold'>{time}</p>

            {_id === thisRoom ? <DeleteIcon id={_id} /> : <PlayIcon id={_id} />}
        </div>
    )
}

export default Room
