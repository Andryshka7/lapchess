import { useAppDispatch, useAppSelector } from 'redux/store'
import { useState, useEffect } from 'react'
import { handleMove, selectPiece } from '../../store/chessBoardSlice'
import { pieceStyle } from './helpers'
import { getNextMoves } from '../../store/helpers'
import { ChessPiece } from '../../store/types/ChessBoard'
import startDragging from './startDragging'

interface PieceState {
    x: number
    y: number
    name: ChessPiece
}

export const Piece = (initialState: PieceState) => {
    const dispatch = useAppDispatch()
    const chessBoard = useAppSelector((store) => store.practice)
    const [pieceState, setPieceState] = useState<PieceState>(initialState)

    const { turn, globalNextMoves, gameField, rerenderQueue } = chessBoard
    const { x, y, name } = pieceState

    useEffect(() => {
        rerenderQueue.forEach(({ from, to }) => {
            if (JSON.stringify(pieceState) === JSON.stringify(from)) {
                setPieceState(to)
            }
        })
    }, [gameField])

    if (name === '0') return null

    const nextMoves = getNextMoves([x, y], chessBoard)
    const pointerEvents =
        globalNextMoves.includesDeeply([x, y]) || name[0] === turn
            ? 'pointer-events-all'
            : 'pointer-events-none'

    const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (globalNextMoves.includesDeeply([x, y])) {
            dispatch(handleMove({ x, y }))
        } else if (turn === name[0]) {
            dispatch(selectPiece({ x, y, nextMoves }))
            startDragging(event, { x, y }, (a, b) => {
                if (nextMoves.includesDeeply([a, b])) dispatch(handleMove({ x: a, y: b }))
            })
        }
    }

    return (
        <img
            src={`/${name}.png`}
            className={`${pieceStyle(name, x, y)} ${pointerEvents}`}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
            alt='error'
        />
    )
}
