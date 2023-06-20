import { useAppDispatch, useAppSelector } from 'redux/store'
import { getPieceStyle } from 'config/styles'
import { handleMove } from 'pages/mastery/redux/actions'
import useStartDragging from './hooks/useStartDragging'
import { findPiece } from 'helpers'

interface PieceProps {
    piece: string
}

export const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const { chessBoard } = useAppSelector((store) => store.mastery)

    const startDragging = useStartDragging()

    const { turn, nextMoves, gameField, selected } = chessBoard

    const coordinates = findPiece(piece, gameField)

    if (!coordinates) return null

    const [x, y] = coordinates
    const name = gameField[y][x].slice(0, 2)

    const pointerEvents =
        nextMoves.includesDeeply([x, y]) || name[0] === turn
            ? 'pointer-events-all'
            : 'pointer-events-none'

    const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (selected && nextMoves.includesDeeply([x, y])) {
            const { x: x1, y: y1 } = selected
            const movePayload = [
                [x1, y1],
                [x, y]
            ]
            dispatch(handleMove(movePayload))
        } else if (turn === name[0]) {
            const startingPosition = [event.clientX, event.clientY]
            startDragging(event.currentTarget, coordinates, startingPosition)
        }
    }

    return (
        <img
            src={`pieces/${name}.png`}
            className={`${getPieceStyle(name[1], x, y)} ${pointerEvents}`}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
        />
    )
}
