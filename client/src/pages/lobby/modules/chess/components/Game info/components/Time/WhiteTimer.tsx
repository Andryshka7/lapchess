import { useAppSelector } from 'redux/store'
import formatTime from './helpers/formatTime'
import useWhiteTimer from './hooks/useWhiteTimer'

const WhiteTimer = () => {
    const time = useWhiteTimer()
    const { limit } = useAppSelector((store) => store.chess.time)

    return (
        <div className='flex h-8 w-20 items-center justify-center rounded-md bg-white bg-opacity-5 text-xl font-semibold'>
            {limit ? formatTime(time || limit) : '∞'}
        </div>
    )
}

export default WhiteTimer
