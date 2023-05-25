import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChessBoard, PromotedPawn } from './types/ChessBoard'
import {
    handleEnPassant,
    handlePieceMove,
    handleCasling,
    checkForKingDanger,
    handlePawnPromotion,
    notateMove
} from './helpers'

import initialState from './initialState/initialState'

const masterySlice = createSlice({
    name: 'mastery',
    initialState,
    reducers: {
        selectPiece: (state, action: PayloadAction<SelectPiecePayload>) => {
            const { x, y, nextMoves } = action.payload
            state.chessBoard.selected = { x, y }
            state.chessBoard.globalNextMoves = nextMoves
        },
        handleMove: (state, action: PayloadAction<HandleMovePayload>) => {
            const { chessBoard } = state
            const { selected, gameField, promoted } = chessBoard

            const { x: x1, y: y1 } = selected as { x: number; y: number }
            const { x: x2, y: y2 } = action.payload

            const [color, piece] = gameField[y1][x1]

            const castling = piece === 'K' && Math.abs(x2 - x1) > 1
            const enPassant = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'
            const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)

            if (pawnPromoted) {
                handlePawnPromotion(state, [x1, y1], [x2, y2])
            } else if (castling) {
                handleCasling(state, [x2, y2])
            } else if (enPassant) {
                handleEnPassant(state, [x2, y2])
            } else {
                handlePieceMove(state, [x2, y2])
            }

            state.chessBoard.selected = null
            state.chessBoard.globalNextMoves = []
        },

        transformPawn: (state, action: PayloadAction<string>) => {
            const { chessBoard, chessBoardStates } = state
            const transformation = action.payload

            const { name, eaten, x1, y1, x2, y2 } = chessBoard.promoted as PromotedPawn
            const { turn, gameField, chessMoves } = chessBoard

            chessBoard.promoted = null
            gameField[y2][x2] = name[0] + action.payload + name.slice(1)

            const notation = notateMove(
                { name, eaten, gameField, transformation },
                [x1, y1],
                [x2, y2]
            )

            state.current += 1
            chessBoard.turn = turn === 'w' ? 'b' : 'w'

            chessBoard.chessMoves = [...chessMoves.slice(0, state.current - 1), notation]
            checkForKingDanger(chessBoard)
            state.chessBoardStates = [...chessBoardStates.slice(0, state.current), chessBoard]
        },

        cancelPromotion: (state) => {
            const { chessBoard } = state
            const { x1, y1, x2, y2, name, eaten } = chessBoard.promoted as PromotedPawn

            chessBoard.gameField[y1][x1] = name
            chessBoard.gameField[y2][x2] = eaten
            chessBoard.promoted = null
        },
        clearField: (state) => {
            const { chessBoard } = state
            chessBoard.selected = null
            chessBoard.globalNextMoves = []
        },
        setChessBoard: (state, action: PayloadAction<ChessBoard>) => {
            state.chessBoard = action.payload
        },

        switchCurrent: (state, action: PayloadAction<number>) => {
            const { chessBoard, chessBoardStates } = state
            const { chessMoves } = chessBoard

            if (action.payload >= 0 && action.payload < chessBoardStates.length) {
                state.current = action.payload
                state.chessBoard = { ...chessBoardStates[state.current], chessMoves }
            }
        }
    }
})

export const {
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    setChessBoard,
    switchCurrent
} = masterySlice.actions

export default masterySlice.reducer
