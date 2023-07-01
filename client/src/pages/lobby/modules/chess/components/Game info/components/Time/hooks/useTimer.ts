import { useEffect, useState } from 'react'
import useCalculateTime from './useCalculateTime'
import formatTime from './helpers/formatTime'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import API from 'api'

const useTimer = (color: 'w' | 'b') => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        chessBoard: {
            chessMoves,
            gameStatus: { winner, draw }
        }
    } = useAppSelector((store) => store.chess)

    const calculateTime = useCalculateTime(color)

    const [timerState, setTimerState] = useState(calculateTime())

    const turn = chessMoves.length % 2 === 0 ? 'w' : 'b'
    const isActive = turn === color && !(winner || draw)

    const { time, currentTime } = timerState

    useEffect(() => {
        if (time !== null && isActive) {
            if (time > 1) {
                const interval = setInterval(() => setTimerState(calculateTime()), 1)
                return () => clearInterval(interval)
            } else {
                const resignTime = currentTime
                dispatch(playerResigned({ color, resignTime }))
                API.resignGame(gameId, { color, resignTime })
            }
        } else {
            setTimerState(calculateTime())
        }
    }, [time, isActive])

    return formatTime(time)
}

export default useTimer
