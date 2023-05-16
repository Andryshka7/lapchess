import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChessBoard, PromotedPawn } from './types/ChessBoard'
import {
    checkForEnPassant,
    checkForCasling,
    handleEnPassant,
    handlePieceMove,
    handleCasling,
    checkForKingDanger,
    handlePawnPromotion
} from './helpers'

import initialState from './initialState'
import notateMove from './helpers/Move cleanup/notateMove'

const chessBoardSlice = createSlice({
    name: 'practice/chessboard',
    initialState,
    reducers: {
        selectPiece: (state, action: PayloadAction<SelectPiecePayload>) => {
            const { x, y, nextMoves } = action.payload
            state.selected = { x, y }
            state.globalNextMoves = nextMoves
        },
        handleMove: (state, action: PayloadAction<HandleMovePayload>) => {
            const { x: x2, y: y2 } = action.payload
            const { x: x1, y: y1 } = state.selected as { x: number; y: number }

            const [color, piece] = state.gameField[y1][x1]

            const castling = piece === 'K' && Math.abs(x2 - x1) > 1
            const enPassant = piece === 'P' && x1 !== x2 && state.gameField[y2][x2] === '0'
            const pawnPromoted = !state.promoted && piece === 'P' && (y2 === 7 || y2 === 0)

            if (pawnPromoted) {
                handlePawnPromotion(state, [x1, y1], [x2, y2])
            } else if (castling) {
                handleCasling(state, x2, y2)
            } else if (enPassant) {
                handleEnPassant(state, x2, y2)
            } else {
                checkForEnPassant(state, x2, y2)
                checkForCasling(state, [x1, y1], [x2, y2], color + piece)
                handlePieceMove(state, x2, y2)
            }

            state.selected = null
            state.globalNextMoves = []
        },

        transformPawn: (state, action: PayloadAction<string>) => {
            const transformation = action.payload

            const { name, eaten, x1, y1, x2, y2 } = state.promoted as PromotedPawn
            const { turn, gameField } = state

            state.promoted = null
            gameField[y2][x2] = name[0] + action.payload + name.slice(1)

            state.chessMoves.push(
                notateMove({ name, eaten, gameField, transformation }, [x1, y1], [x2, y2])
            )
            state.turn = turn === 'w' ? 'b' : 'w'
            checkForKingDanger(state)
        },

        cancelPromotion: (state) => {
            const { x1, y1, x2, y2, name, eaten } = state.promoted as PromotedPawn

            state.gameField[y1][x1] = name
            state.gameField[y2][x2] = eaten
            state.promoted = null
        },
        clearField: (state) => {
            state.selected = null
            state.globalNextMoves = []
        },
        setChessBoard: (_, action: PayloadAction<ChessBoard>) => action.payload
    }
})

export const {
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    setChessBoard
} = chessBoardSlice.actions

export default chessBoardSlice.reducer
