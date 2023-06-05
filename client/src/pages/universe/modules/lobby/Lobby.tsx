import Rooms from './components/rooms/Rooms'
import CreateRoom from './components/create room/CreateRoom'

const Lobby = () => (
    <div className='mx-auto my-3 w-[1000px]'>
        <Rooms />
        <CreateRoom />
    </div>
)

export default Lobby
