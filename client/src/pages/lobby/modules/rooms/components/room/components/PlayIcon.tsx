import { FaPlay } from 'react-icons/fa'
import { Room } from 'types'
import useStartGame from '../../../hooks/useStartGame'

const PlayIcon = (room: Room) => {
    const startGame = useStartGame()

    return (
        <FaPlay
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={() => startGame(room)}
            color='#4AB561'
            size={18}
        />
    )
}

export default PlayIcon
