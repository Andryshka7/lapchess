import { useAppSelector } from 'redux/store'
import { Rooms, Chess } from './modules/index'

import Error from './ui/Error'
import Loader from './ui/Loader'

const Lobby = () => {
    const { rooms, chess } = useAppSelector((store) => store)

    const loading = rooms.loading || chess.status.loading
    const error = rooms.error || chess.status.error
    
    if (loading) return <Loader />
    if (error) return <Error />

    return chess.status.isActive ? <Chess /> : <Rooms />
}

export default Lobby
