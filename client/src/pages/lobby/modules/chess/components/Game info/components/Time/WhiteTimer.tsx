import { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/store'
import formatTime from './helpers/formatTime'
import useGetWhiteTime from './hooks/useGetWhiteTime'

const WhiteTimer = () => {
    const initialValue = useGetWhiteTime()

    const [time, setTime] = useState<number | null>(null)
    const { limit } = useAppSelector((store) => store.chess.time)
    const {
        turn,
        gameStatus: { winner, draw }
    } = useAppSelector((store) => store.chess).chessBoard

    const isActive = turn === 'w'

    // NEED TO STOP TIMER WHEN NECCESSARY

    useEffect(() => {
        if (initialValue && isActive && !(winner || draw)) {
            const interval = setInterval(() => setTime(initialValue - 1), 1)
            return () => clearInterval(interval)
        } else if (initialValue) {
            setTime(initialValue)
        }
    }, [initialValue, isActive, winner, draw])

    return (
        <div className='flex h-8 w-20 items-center justify-center rounded-md bg-white bg-opacity-5 text-xl font-semibold'>
            {limit ? formatTime(time || limit) : '∞'}
        </div>
    )
}

export default WhiteTimer
