import { useAppSelector } from 'redux/store'
import { FaPlay } from 'react-icons/fa'
import CreateRoom from './create room/CreateRoom'
import panda from 'assets/panda.png'

const Rooms = () => {
    const { rooms } = useAppSelector((store) => store)
    return (
        <>
            <div className='w-[1000px] h-[636px] mx-auto mt-3 p-2.5 rounded-lg bg-black bg-opacity-10'>
                {rooms.map(({ user, color, time }) => (
                    <div className='relative h-[52px] grid grid-cols-3 items-center mb-1.5 px-10 rounded-lg bg-white bg-opacity-5'>
                        <div className='flex items-center'>
                            <img src={panda} className='w-[30px] h-[30px] rounded-full' alt='' />
                            <h2 className='ml-3 text-base font-semibold'>{user.username}</h2>
                        </div>
                        <img src={`${color}.png`} className='w-[30px] h-[30px]' alt='' />
                        <p className='text-base font-semibold'>{time}</p>
                        <FaPlay
                            className='absolute right-10 transition duration-200 hover:scale-110'
                            color='#4AB561'
                        />
                    </div>
                ))}
            </div>
            <CreateRoom />
        </>
    )
}

export default Rooms
