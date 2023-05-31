import { Room as IRoom } from 'pages/universe/modules/lobby/types/Room'
import { useAppSelector } from 'redux/store'
import DeleteIcon from './components/DeleteIcon'
import PlayIcon from './components/PlayIcon'
import panda from 'assets/panda.png'

const Room = ({ user, color, time, id: roomID }: IRoom) => {
    const { id } = useAppSelector((store) => store.chess)
    return (
        <div
            className='relative mb-1.5 grid h-[52px] grid-cols-3 items-center rounded-lg bg-white bg-opacity-5 px-10'
            key={roomID}
        >
            <div className='flex items-center'>
                <img src={panda} className='h-[30px] w-[30px] rounded-full' alt='' />
                <h2 className='ml-3 text-base font-semibold'>{user.username}</h2>
            </div>

            <img src={`${color}.png`} className='h-[30px] w-[30px]' alt='' />
            <p className='text-base font-semibold'>{time}</p>

            {id === roomID ? <DeleteIcon id={roomID} /> : <PlayIcon id={roomID} />}
        </div>
    )
}

export default Room
