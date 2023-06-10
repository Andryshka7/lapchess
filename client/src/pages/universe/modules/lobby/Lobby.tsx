import Rooms from './components/rooms/Rooms'
import CreateRoom from './components/create room/CreateRoom'
import { useAppSelector } from 'redux/store'
import Chess from '../chess/Chess'

const Lobby = () => {
    const { color } = useAppSelector((store) => store.chess)

    return color ? (
        <Chess />
    ) : (
        <div className='mx-auto my-3 w-[1000px]'>
            <Rooms />
            <CreateRoom />
        </div>
    )
}

export default Lobby
