import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import useCalculateTime from './useCalculateTime'
import formatTime from './helpers/formatTime'
import API from 'api'

const useTimer = (color: 'w' | 'b') => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        chessBoard: {
            turn,
            gameStatus: { winner }
        }
    } = useAppSelector((store) => store.chess)

    const calculateTime = useCalculateTime(color)

    const [timerState, setTimerState] = useState(calculateTime())

    const { time, isActive, currentTime } = timerState

    useEffect(() => {
        setTimerState(calculateTime())
        if (time !== null && isActive) {
            if (time > 1000) {
                const interval = setInterval(() => setTimerState(calculateTime()), 1000)
                return () => clearInterval(interval)
            } else if (!winner) {
                const resignTime = currentTime
                dispatch(playerResigned({ color, resignTime }))
                API.resignGame(gameId, { color, resignTime })
            }
        }
    }, [time, turn, winner])

    return formatTime(time)
}

export default useTimer
