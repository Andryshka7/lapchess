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
        <div className='w-full h-[636px] p-2.5 rounded-lg bg-black bg-opacity-10'>
            {rooms.length ? (
                rooms.map((room) => <Room {...room} key={room.id} />)
            ) : (
                <div className='w-full h-full m-auto flex items-center justify-center'>
                    <img src={noResults} className='w-48 h-48 m-5' alt='' />
                    <div>
                        <h1 className='w-fit leading-tight m-5 text-5xl font-semibold'>
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
