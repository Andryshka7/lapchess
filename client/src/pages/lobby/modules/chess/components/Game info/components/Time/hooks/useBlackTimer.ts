import { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/store'

const useCalculateTime = () => {
    const {
        time: { blackElapsedTime, whiteElapsedTime, limit, addition, startingPoint },
        chessBoard: {
            chessMoves,
            gameStatus: { draw, winner }
        }
    } = useAppSelector((store) => store.chess)

    if (chessMoves.length < 2 || !startingPoint || !limit) {
        return { isActive: false, timeLeft: null }
    }

    const movesAmount = Math.floor(chessMoves.length / 2)
    const extraTime = (movesAmount - 1) * addition

    const isActive = chessMoves.length % 2 === 1 && !(winner || draw)

    const timeElapsed = Date.now() - startingPoint - whiteElapsedTime
    const timeLeft = limit - (isActive ? timeElapsed : blackElapsedTime) + extraTime

    return { isActive, timeLeft }
}

const useWhiteTimer = () => {
    const [time, setTime] = useState<number | null>(null)
    const { isActive, timeLeft } = useCalculateTime()

    useEffect(() => {
        if (timeLeft && isActive) {
            const interval = setInterval(() => setTime(timeLeft - 1), 1)
            return () => clearInterval(interval)
        } else if (timeLeft) {
            setTime(timeLeft)
        }
    }, [timeLeft, isActive])

    return time
}

export default useWhiteTimer
