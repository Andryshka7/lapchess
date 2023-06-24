import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import {
    handleMove,
    initializeGame,
    playerResigned,
    transformPawn,
} from 'pages/lobby/redux/actions'
import useDrawHandlers from './drawHandlers'
import useRestartHandlers from './restartHandlers'
import socket from 'socket'

const useGameHandlers = () => {
    const dispatch = useAppDispatch()

    useDrawHandlers()
    useRestartHandlers()

    useEffect(() => {
        socket.on('GAME_INITIALIZED', (payload) => {
            dispatch(initializeGame(payload))
        })
        socket.on('HANDLE_MOVE', (payload) => {
            dispatch(handleMove(payload))
        })
        socket.on('HANDLE_PROMOTED_PAWN', (payload) => {
            dispatch(transformPawn(payload))
        })
        socket.on('PLAYER_RESIGNED', (player) => {
            dispatch(playerResigned(player))
        })
    }, [])
}

export default useGameHandlers
