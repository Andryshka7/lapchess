import { useAppSelector } from 'redux/store'
import Lobby from './modules/lobby/Lobby'
import Chess from './modules/chess/Chess'

const Universe = () => {
    const { owner, guest } = useAppSelector((store) => store.chess)
    return owner && guest ? <Chess /> : <Lobby />
}

export default Universe
