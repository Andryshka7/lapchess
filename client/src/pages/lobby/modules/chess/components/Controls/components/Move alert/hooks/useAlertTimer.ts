import { useAppDispatch, useAppSelector } from 'redux/store'
import useCalculateAlertTime from './useCalculateAlertTime'
import { useEffect, useState } from 'react'
import { cancelGame } from 'pages/lobby/modules/chess/redux/actions'
import API from 'api'
import socket from 'socket'

const useAlertTimer = () => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        status: { cancelled },
        chessBoard: { turn }
    } = useAppSelector((store) => store.chess)

    const calculateTime = useCalculateAlertTime()
    const [time, setTime] = useState(calculateTime())

    useEffect(() => {
        setTime(calculateTime())
        if (time !== null) {
            if (time > 0) {
                const interval = setInterval(() => setTime(calculateTime()), 1000)
                return () => clearInterval(interval)
            } else if (!cancelled) {
                dispatch(cancelGame())
                API.cancelGame(gameId)
                socket.emit('CANCEL_GAME', gameId)
            }
        }
    }, [turn, time])

    return time
}

export default useAlertTimer
