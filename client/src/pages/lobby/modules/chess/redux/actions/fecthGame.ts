import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { ChessGame } from 'types'
import socket from 'socket'
import API from 'api'

const fetchGame = createAsyncThunk<ChessGame | null, void, { state: RootState }>(
    'chess/fetchGame',
    async (_, thunkApi) => {
        const { gameId } = thunkApi.getState().chess

        if (gameId) {
            socket.emit('JOIN_ROOM', gameId)
        }
        const chessGame = await API.fetchGame(gameId)

        return chessGame
    }
)

export default fetchGame
