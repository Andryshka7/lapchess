import { useAppDispatch, useAppSelector } from 'redux/store'
import { useState, useEffect } from 'react'
import { handleMove, selectPiece } from '../../store/chessBoardSlice'
import { PieceProps } from '../../store/types/PieceProps'
import { pieceStyle, objectsAreEqual } from './helpers'
import { getNextMoves } from '../../store/helpers'
import startDragging from './startDragging'

export const Piece = (initialState: PieceProps) => {
    const dispatch = useAppDispatch()
    const chessBoard = useAppSelector((store) => store.practice)
    const [pieceState, setPieceState] = useState<PieceProps | null>(initialState)

    const { turn, lastMoves, globalNextMoves, gameField } = chessBoard

    useEffect(() => {
        lastMoves.forEach(({ from, to }) => {
            if (pieceState && objectsAreEqual(pieceState, from)) {
                setPieceState(to)
            }
        })
    }, [gameField])

    if (!pieceState) return <></>

    const { name, x, y } = pieceState

    const nextMoves = getNextMoves([x, y], chessBoard)

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
            className={pieceStyle(name, x, y)}
            style={{ translate: '0 0' }}
            onMouseDown={handleMouseClick}
            alt='error'
        />
    )
}
