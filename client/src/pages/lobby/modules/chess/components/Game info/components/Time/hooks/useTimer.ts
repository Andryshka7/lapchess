import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import { resignGameQuery } from 'api/chess games'
import useCalculateTime from './useCalculateTime'
import formatTime from './helpers/formatTime'

const useTimer = (color: 'w' | 'b') => {
    const dispatch = useAppDispatch()

    const gameId = useAppSelector((store) => store.chess.gameId)
    const turn = useAppSelector((store) => store.chess.chessBoard.turn)
    const { winner } = useAppSelector((store) => store.chess.chessBoard.gameStatus)

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
                resignGameQuery(gameId, { color, resignTime })
            }
        }
    }, [time, turn, winner])

    return formatTime(time)
}

export default useTimer
