import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import {
    acceptDraw,
    setOpponentSent,
    setOwnerSent
} from 'pages/lobby/redux/actions'
import socket from 'socket'

const useDrawHandlers = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('OPPONENT_SUGGESTED_DRAW', () => {
            dispatch(setOpponentSent(true))
        })
        socket.on('OPPONENT_CANCELLED_DRAW', () => {
            dispatch(setOpponentSent(false))
        })
        socket.on('OPPONENT_DECLINED_DRAW', () => {
            dispatch(setOwnerSent(false))
        })
        socket.on('OPPONENT_ACCEPTED_DRAW', () => {
            dispatch(acceptDraw())
        })
    }, [])
}

export default useDrawHandlers