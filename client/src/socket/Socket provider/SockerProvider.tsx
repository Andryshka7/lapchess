import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import socket from '../socket'
import { ChessBoard } from 'types'
import { initializeGame, addRoom, removeRoom } from 'pages/lobby/store/actions'
import { updateChessBoard } from 'pages/lobby/store/actions'
import { Room } from 'types'

interface SocketProviderProps {
    children: ReactNode
}

type Player = null | {
    avatar: string
    username: string
    _id: string
}

interface CreateGamePayload {
    white: Player
    black: Player
    color: string
    gameId: string
}

const SocketProvider = ({ children }: SocketProviderProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('ROOM_CREATED', (room: Room) => {
            dispatch(addRoom(room))
        })
        socket.on('ROOM_DELETED', (id: string) => {
            dispatch(removeRoom(id))
        })
        socket.on('GAME_INITIALIZED', (payload: CreateGamePayload) => {
            dispatch(initializeGame(payload))
        })
        socket.on('HANDLE_MOVE', (chessBoard: ChessBoard) => {
            dispatch(updateChessBoard(chessBoard))
        })
    }, [])

    return <>{children}</>
}

export default SocketProvider
