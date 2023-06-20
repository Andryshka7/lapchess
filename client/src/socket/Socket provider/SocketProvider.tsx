import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import {
    initializeGame,
    addRoom,
    removeRoom,
    handleMove,
    transformPawn,
    restartGame,
    setOpponentAgreed,
    setOpponentLeft,
    playerResigned
} from 'pages/lobby/redux/actions'
import socket from 'socket'

interface SocketProviderProps {
    children: ReactNode
}

const SocketProvider = ({ children }: SocketProviderProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('ROOM_CREATED', (room) => {
            dispatch(addRoom(room))
        })
        socket.on('ROOM_DELETED', (id) => {
            dispatch(removeRoom(id))
        })
        socket.on('GAME_INITIALIZED', (payload) => {
            dispatch(initializeGame(payload))
        })
        socket.on('HANDLE_MOVE', (payload) => {
            dispatch(handleMove(payload))
        })
        socket.on('HANDLE_PROMOTED_PAWN', (payload) => {
            dispatch(transformPawn(payload))
        })
        socket.on('UPDATE_READY_TO_RESTART', (payload) => {
            dispatch(setOpponentAgreed(payload))
        })
        socket.on('OPPONENT_LEFT', () => {
            dispatch(setOpponentLeft(true))
        })
        socket.on('PLAYER_RESIGNED', (player) => {
            dispatch(playerResigned(player))
        })
        socket.on('RESTARTED_GAME', () => {
            dispatch(restartGame())
        })
    }, [])

    return <>{children}</>
}

export default SocketProvider
