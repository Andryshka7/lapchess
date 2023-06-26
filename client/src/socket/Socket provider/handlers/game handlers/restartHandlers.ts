import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import {
    restartGame,
    setOpponentAgreed,
    setOpponentLeft
} from 'pages/lobby/modules/chess/redux/actions'
import socket from 'socket'

const useRestartHandlers = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('UPDATE_READY_TO_RESTART', (payload) => {
            dispatch(setOpponentAgreed(payload))
        })
        socket.on('OPPONENT_LEFT', () => {
            dispatch(setOpponentLeft(true))
        })
        socket.on('RESTARTED_GAME', () => {
            dispatch(restartGame())
        })
    }, [])
}

export default useRestartHandlers
