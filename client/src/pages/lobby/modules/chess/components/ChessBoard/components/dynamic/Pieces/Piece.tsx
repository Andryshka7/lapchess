import { useAppDispatch, useAppSelector } from 'redux/store'
import { handleMove } from 'pages/lobby/modules/chess/redux/actions'
import useStartDragging from './hooks/useStartDragging'
import { findPiece } from 'helpers'
import { hoverEffect, left, margin, scale, top } from 'config/styles/piece'

interface PieceProps {
    piece: string
}

const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const {
        color,
        position,
        positionHistory,
        chessBoard: { turn, nextMoves, gameField, selected }
    } = useAppSelector((store) => store.chess)

    const startDragging = useStartDragging()

    const coordinates = findPiece(piece, gameField)

    if (!coordinates) return null

    const [x, y] = coordinates
    const name = gameField[y][x].slice(0, 2)

    const allowPointerEvents =
        position + 1 === positionHistory.length &&
        color === turn &&
        (name[0] === turn || nextMoves.includesDeeply([x, y]))

    const pointerEvents = allowPointerEvents ? 'pointer-events-all' : 'pointer-events-none'

    const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (selected && nextMoves.includesDeeply([x, y])) {
            const { x: x1, y: y1 } = selected
            const coordinates = [
                [x1, y1],
                [x, y]
            ]
            const time = Date.now()
            dispatch(handleMove({ coordinates, time }))
        } else if (turn === name[0]) {
            const startingPosition = [event.clientX, event.clientY]
            startDragging(event.currentTarget, coordinates, startingPosition)
        }
    }

    const piecePos = `${left(color === 'b' ? 7 - x : x)} ${top(color === 'b' ? 7 - y : y)}`
    const pieceScale = scale(name[1])
    const pieceMargin = margin(name[1])
    const pieceHover = hoverEffect(name[1])

    return (
        <img
            src={`pieces/${name}.png`}
            className={`absolute z-[1] w-[12.5%] transition-all duration-200 ${piecePos} ${pieceScale} ${pieceMargin} ${pointerEvents} ${pieceHover}`}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
        />
    )
}

export default Piece
