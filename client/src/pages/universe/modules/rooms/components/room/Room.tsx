import { Room as IRoom } from 'pages/universe/types/Room'
import { useAppSelector } from 'redux/store'
import DeleteIcon from './components/DeleteIcon'
import PlayIcon from './components/PlayIcon'
import panda from 'assets/panda.png'

const Room = ({ user, color, time, id: roomID }: IRoom) => {
    const { id } = useAppSelector((store) => store.chess)
    return (
        <div
            className='relative h-[52px] grid grid-cols-3 items-center mb-1.5 px-10 rounded-lg bg-white bg-opacity-5'
            key={roomID}
        >
            <div className='flex items-center'>
                <img src={panda} className='w-[30px] h-[30px] rounded-full' alt='' />
                <h2 className='ml-3 text-base font-semibold'>{user.username}</h2>
            </div>

            <img src={`${color}.png`} className='w-[30px] h-[30px]' alt='' />
            <p className='text-base font-semibold'>{time}</p>

            {id === roomID ? <DeleteIcon id={roomID} /> : <PlayIcon id={roomID} />}
        </div>
    )
}

export default Room
