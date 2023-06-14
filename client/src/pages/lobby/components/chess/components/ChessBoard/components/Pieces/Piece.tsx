import { useAppDispatch, useAppSelector } from 'redux/store'
import { findPiece } from './helpers'
import { getPieceStyle } from 'config/styles'
import { handleMove } from 'pages/lobby/store/actions'
import useStartDragging from './helpers/startDragging'

interface PieceProps {
    piece: string
}

export const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const { color, chessBoard } = useAppSelector((store) => store.lobby.chess)

    const startDragging = useStartDragging()

    const { turn, globalNextMoves, gameField } = chessBoard

    const coordinates = findPiece(piece, gameField)

    if (!coordinates) return null

    const [x, y] = coordinates
    const name = gameField[y][x].slice(0, 2)

    const pointerEvents =
        globalNextMoves.includesDeeply([x, y]) || name[0] === turn
            ? 'pointer-events-all'
            : 'pointer-events-none'
    const isReversed = color === 'b' ? 'rotate-180' : ''

    const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (globalNextMoves.includesDeeply([x, y])) {
            dispatch(handleMove({ x, y }))
        } else if (turn === name[0]) {
            const startingPosition = [event.clientX, event.clientY]
            startDragging(event.currentTarget, coordinates, startingPosition)
        }
    }

    return (
        <img
            src={`pieces/${name}.png`}
            className={`${getPieceStyle(name[1], x, y)} ${pointerEvents} ${isReversed}`}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
        />
    )
}
