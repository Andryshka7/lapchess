import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { getRooms } from 'api/rooms'
import { getChessGame } from 'api/chess games'
import { ChessBoard, Player, Room } from 'types'
import socket from 'socket/socket'

interface ReturnValue {
    rooms: Room[]
    chessGame: {
        white: Player
        black: Player
        gameId: string
        positionHistory: Partial<ChessBoard>[]
    }
}

const fetchLobbyData = createAsyncThunk<ReturnValue, void, { state: RootState }>(
    'lobby/fetchLobbyData',
    async (_, thunkApi) => {
        const { gameId } = thunkApi.getState().lobby
        if (gameId) {
            socket.emit('JOIN_ROOM', gameId)
        }

        const rooms = await getRooms()
        const chessGame = await getChessGame(gameId)

        return { rooms, chessGame }
    }
)

export default fetchLobbyData
