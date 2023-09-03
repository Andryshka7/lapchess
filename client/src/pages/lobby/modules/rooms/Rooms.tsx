import { useAppSelector } from 'redux/store'
import { selectAllRooms } from './redux/roomsSlice'
import { Room, CreateRoom } from './components'
import noResults from 'assets/images/no-results.png'

const Rooms = () => {
    const rooms = useAppSelector(selectAllRooms)
    return (
        <div className='my-3 w-full lg:mx-auto lg:w-[1000px]'>
            <div className='scrollbar-thin h-fit max-h-[636px] w-full overflow-hidden overflow-y-scroll rounded-lg bg-black bg-opacity-10 p-2.5 pb-1 will-change-scroll md:h-[636px]'>
                {rooms.length ? (
                    rooms.map((room) => <Room {...room} key={room._id} />)
                ) : (
                    <div className='m-auto flex h-full w-full flex-col items-center justify-center md:flex-row'>
                        <img
                            src={noResults}
                            className='xs:h-40 xs:w-40 m-5 h-36 w-36 md:h-48 md:w-48'
                        />
                        <div>
                            <h1 className='xs:text-4xl m-5 mb-10 w-fit text-center text-3xl font-semibold leading-tight lg:text-5xl'>
                                Unfortunately, there
                                <br />
                                are no available games...
                            </h1>
                        </div>
                    </div>
                )}
            </div>
            <CreateRoom />
        </div>
    )
}

export default Rooms
