import { useEffect, useState } from 'react'
import useCalculateTime from './useCalculateTime'
import formatTime from './helpers/formatTime'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import API from 'api'
import socket from 'socket'

const useTimer = (color: 'w' | 'b') => {
    const dispatch = useAppDispatch()
    const { color: myColor, gameId } = useAppSelector((store) => store.chess)

    const [time, setTime] = useState<number | null>(null)
    const { isActive, timeLeft, currentTime } = useCalculateTime(color)

    useEffect(() => {
        if (timeLeft !== null && isActive) {
            if (timeLeft > 1) {
                const interval = setInterval(() => setTime(timeLeft), 1)
                return () => clearInterval(interval)
            } else if (color === myColor) {
                const resignTime = currentTime
                dispatch(playerResigned({ color, resignTime }))
                API.resignGame(gameId, { color, resignTime })
                socket.emit('PLAYER_RESIGNED', gameId, { color, resignTime })
            }
        } else {
            setTime(timeLeft)
        }
    }, [timeLeft, isActive])

    if (color === 'w') console.log(time)

    return formatTime(time)
}

export default useTimer
