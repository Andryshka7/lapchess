import { FaPlay } from 'react-icons/fa'

const PlayIcon = ({ id }: { id: string }) => {
    return (
        <FaPlay
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={() => {}}
            color='#4AB561'
            size={18}
        />
    )
}

export default PlayIcon
