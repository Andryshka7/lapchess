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
        chessBoard: {
            chessMoves,
            gameStatus: { winner, draw }
        }
    } = useAppSelector((store) => store.chess)

    const calculateTime = useCalculateAlertTime()
    const [time, setTime] = useState(calculateTime())

    const showAlert =
        !(winner || draw || cancelled) && (chessMoves.length === 0 || chessMoves.length === 1)

    useEffect(() => {
        if (time !== null && showAlert) {
            if (time > 0) {
                const interval = setInterval(() => setTime(calculateTime()), 1)
                return () => clearInterval(interval)
            } else {
                dispatch(cancelGame())
                API.cancelGame(gameId)
                socket.emit('CANCEL_GAME', gameId)
            }
        } else {
            setTime(calculateTime())
        }
    }, [time, chessMoves, showAlert])

    return time
}

export default useAlertTimer
