import { useAppDispatch, useAppSelector } from 'redux/store'
import { findPiece } from 'pages/lobby/redux/reducers/chess/helpers'
import { getPieceStyle } from 'config/styles'
import { handleMove } from 'pages/lobby/redux/actions'
import useStartDragging from './hooks/useStartDragging'

interface PieceProps {
    piece: string
}

export const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const { color, chessBoard, position, positionHistory } = useAppSelector(
        (store) => store.lobby.chess
    )

    const startDragging = useStartDragging(color === 'w' ? 1 : -1)

    const { turn, nextMoves, gameField } = chessBoard

    const coordinates = findPiece(piece, gameField)

    if (!coordinates) return null

    const [x, y] = coordinates
    const name = gameField[y][x].slice(0, 2)

    const allowPointerEvents =
        position + 1 === positionHistory.length &&
        color === turn &&
        (name[0] === turn || nextMoves.includesDeeply([x, y]))

    const pointerEvents = allowPointerEvents ? 'pointer-events-all' : 'pointer-events-none'
    const isReversed = color === 'b' ? 'rotate-180' : ''

    const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (nextMoves.includesDeeply([x, y])) {
            dispatch(handleMove({ x, y }))
        } else if (turn === name[0]) {
            const startingPosition = [event.clientX, event.clientY]
            startDragging(event.currentTarget, coordinates, startingPosition)
        }
    }

    return (
        <img
            src={`pieces/${name}.png`}
            className={`${getPieceStyle(name[1], x, y)} ${pointerEvents} ${isReversed} `}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
        />
    )
}
