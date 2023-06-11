import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { deleteRoom, newRoom } from 'pages/universe/modules/lobby/store/lobbySlice'
import { initializeGame, updateChessBoard } from 'pages/universe/modules/chess/store/chessSlice'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import socket from '../socket'
import { ChessBoard } from 'pages/mastery/store/types/ChessBoard'

interface SocketProviderProps {
    children: ReactNode
}

type Player = {
    username: string
    avatar: string
    _id: string
} | null

interface ChessPayload {
    white: Player
    black: Player
    color: string
    gameId: string
}

const SocketProvider = ({ children }: SocketProviderProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('NEW_ROOM', (room: Room) => {
            dispatch(newRoom(room))
        })
        socket.on('DELETE_ROOM', (id: string) => {
            dispatch(deleteRoom(id))
        })
        socket.on('GAME_INITIALIZED', (payload: ChessPayload) => {
            dispatch(initializeGame(payload))
        })
        socket.on('HANDLE_MOVE', (chessBoard: ChessBoard) => {
            dispatch(updateChessBoard(chessBoard))
        })
    }, [])

    return <>{children}</>
}

export default SocketProvider
