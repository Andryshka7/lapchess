import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { fetchRooms } from 'api/rooms'
import { fetchGame } from 'api/chess games'
import { ChessBoard, Player, Room } from 'types'
import socket from 'socket'

interface ReturnValue {
    rooms: Room[]
    chessGame: {
        white: Player
        black: Player
        gameId: string
        positionHistory: ChessBoard[]
    }
}

const fetchLobbyData = createAsyncThunk<ReturnValue, void, { state: RootState }>(
    'lobby/fetchLobbyData',
    async (_, thunkApi) => {
        const { gameId } = thunkApi.getState().lobby
        if (gameId) {
            socket.emit('JOIN_ROOM', gameId)
        }

        const rooms = await fetchRooms()
        const chessGame = await fetchGame(gameId)

        return { rooms, chessGame }
    }
)

export default fetchLobbyData
