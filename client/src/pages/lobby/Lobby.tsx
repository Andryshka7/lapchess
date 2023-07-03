import { useAppSelector } from 'redux/store'
import { Rooms, Chess } from './modules/index'

import Error from './ui/Error'
import Loader from './ui/Loader'




const Lobby = () => {
    const { rooms, chess } = useAppSelector((store) => store)

    console.log('rerender')

    const loading = rooms.loading || chess.status.loading
    const error = rooms.error || chess.status.error
    const isActive = chess.status.isActive

    if (loading) return <Loader />
    if (error) return <Error />

    return isActive ? <Chess /> : <Rooms />
}

export default Lobby
