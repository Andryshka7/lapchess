import { useAppDispatch, useAppSelector } from 'redux/store'
import { handleMove, selectPiece } from '../../store/chessBoardSlice'
import { pieceStyle } from './helpers'
import { getNextMoves } from '../../store/helpers'
import findPiece from './helpers/findPiece'
import startDragging from './startDragging'

interface PieceProps {
    piece: string
}

export const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const chessBoard = useAppSelector((store) => store.practice)

    const { turn, globalNextMoves, gameField } = chessBoard

    const coordinates = findPiece(piece, gameField)

    if (!coordinates) return null

    const [x, y] = coordinates
    const name = gameField[y][x].slice(0, 2)

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
