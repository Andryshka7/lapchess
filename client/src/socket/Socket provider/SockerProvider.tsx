import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { ChessBoard, Player, Room } from 'types'
import {
    initializeGame,
    addRoom,
    removeRoom,
    restartGame,
    updateChessBoard,
    setOpponentAgreed,
    setOpponentLeft,
    playerResigned
} from 'pages/lobby/redux/actions'
import socket from '../socket'

interface SocketProviderProps {
    children: ReactNode
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
        socket.on('UPDATE_READY_TO_RESTART', (payload: boolean) => {
            dispatch(setOpponentAgreed(payload))
        })
        socket.on('OPPONENT_LEFT', () => {
            dispatch(setOpponentLeft(true))
        })
        socket.on('PLAYER_RESIGNED', (player: string) => {
            dispatch(playerResigned(player))
        })
        socket.on('RESTARTED_GAME', () => {
            dispatch(restartGame())
        })
    }, [])

    return <>{children}</>
}

export default SocketProvider
