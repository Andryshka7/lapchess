import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { ChessGame } from 'types'
import { fetchGameQuery } from 'api/chess games'
import socket from 'socket'

const fetchGame = createAsyncThunk<ChessGame | null, void, { state: RootState }>(
    'chess/fetchGame',
    async (_, thunkApi) => {
        const { gameId } = thunkApi.getState().chess

        if (gameId) {
            socket.emit('JOIN_ROOM', gameId)
        }
        const chessGame = await fetchGameQuery(gameId)

        return chessGame
    }
)

export default fetchGame
