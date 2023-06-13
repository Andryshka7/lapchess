import { useAppSelector } from 'redux/store'
import Rooms from './components/rooms/Rooms'
import Chess from './components/chess/Chess'
import LobbyError from './components/Error'
import LobbyLoader from './components/Loader'

const Universe = () => {
    const {
        loading,
        error,
        chess: { color }
    } = useAppSelector((store) => store.lobby)

    if (loading) return <LobbyLoader />
    if (error) return <LobbyError />

    return color ? <Chess /> : <Rooms />
}

export default Universe
