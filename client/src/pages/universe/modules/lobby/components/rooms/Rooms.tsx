import { useAppSelector } from 'redux/store'
import noResults from 'assets/no-results.png'
import Loader from './components/Loader'
import Error from './components/Error'
import Room from './components/room/Room'

const Rooms = () => {
    const { loading, error, rooms } = useAppSelector((store) => store.lobby)

    if (loading) {
        return <Loader />
    } else if (error) {
        return <Error />
    }

    return (
        <div className='scrollbar-thin h-[636px] w-full overflow-hidden overflow-y-scroll rounded-lg bg-black bg-opacity-10 p-2.5 pb-1 will-change-scroll'>
            {rooms.length ? (
                rooms.map((room) => <Room {...room} key={room.id} />)
            ) : (
                <div className='m-auto flex h-full w-full items-center justify-center'>
                    <img src={noResults} className='m-5 h-48 w-48' alt='' />
                    <div>
                        <h1 className='m-5 w-fit text-5xl font-semibold leading-tight'>
                            Unfortunately, there
                            <br />
                            are no available games...
                        </h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Rooms
