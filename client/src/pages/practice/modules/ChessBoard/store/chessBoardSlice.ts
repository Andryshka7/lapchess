import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChessBoard } from '../types/ChessBoard'
import { getNextMoves, arrayIncludes } from './helpers'
import initialGameField from './gameField'

const initialState: ChessBoard = {
    gameField: initialGameField,
    nextMoves: [],
    selected: null,
    turn: 'w',
    coverMoves: [],
    lastMoves: [],
    castling: 'KQkq',
    enpassing: null
}

const chessBoardSlice = createSlice({
    name: 'practice/chessboard',
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<{ x: number; y: number }>) => {
            const { x, y } = action.payload
            state.selected = { x, y }
            state.nextMoves = getNextMoves([x, y], state)
        },
        handleMove: (state, action: PayloadAction<{ x: number; y: number }>) => {
            const { x: x2, y: y2 } = action.payload
            const { turn, gameField } = state

            if (!state.selected || !arrayIncludes(state.nextMoves, [x2, y2])) return

            const { x: x1, y: y1 } = state.selected
            const piece = state.gameField[y1][x1]

            // const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)
            const castling = piece[1] === 'K' && Math.abs(x2 - x1) > 1

            const enPassing = piece[1] === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
            const eatenPiece = gameField[enPassing ? y1 : y2][x2]

            const isPawn = piece[1] === 'P'
            const madeTwoSteps = Math.abs(y2 - y1) === 2
            const hasPawnsOnSide =
                (x2 < 7 && gameField[y2][x2 + 1] === (turn === 'w' ? 'b' : 'w') + 'P') ||
                (x2 > 0 && gameField[y2][x2 - 1] === (turn === 'w' ? 'b' : 'w') + 'P')

            state.enpassing = isPawn && madeTwoSteps && hasPawnsOnSide ? { x: x2, y: y2 } : null

            state.gameField[y2][x2] = state.gameField[y1][x1]
            state.gameField[y1][x1] = '0'

            state.selected = null
            state.nextMoves = []
            state.turn = state.turn === 'w' ? 'b' : 'w'

            state.lastMoves = [
                {
                    from: { name: piece, x: x1, y: y1 },
                    to: { name: piece, x: x2, y: y2 }
                }
            ]

            if (eatenPiece !== '0') {
                state.lastMoves.push({
                    from: { name: eatenPiece, x: x2, y: enPassing ? y1 : y2 },
                    to: null
                })
            }
        }
    }
})

export const { setSelected, handleMove } = chessBoardSlice.actions
export default chessBoardSlice.reducer
