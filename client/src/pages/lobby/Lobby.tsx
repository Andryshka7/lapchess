import { useAppSelector } from 'redux/store'
import { Rooms, Chess, LobbyError, LobbyLoader } from './components'

const Lobby = () => {
    const {
        loading,
        error,
        chess: {
            status: { isActive }
        }
    } = useAppSelector((store) => store.lobby)

    if (loading) return <LobbyLoader />
    if (error) return <LobbyError />

    return isActive ? <Chess /> : <Rooms />
}

export default Lobby
