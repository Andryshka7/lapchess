import { useAppDispatch, useAppSelector } from 'redux/store'
import { handleMove, selectPiece } from '../../../../store/actions'
import findPiece from '../../../../store/reducers/helpers/Next moves/filtration/helpers/findPiece'
import getNextMoves from '../../../../store/reducers/helpers/Next moves/getNextMoves'
import startDragging from './helpers/startDragging'
import { getPieceStyle } from 'config/styles'

interface PieceProps {
    piece: string
}

export const Piece = ({ piece }: PieceProps) => {
    const dispatch = useAppDispatch()
    const chessBoard = useAppSelector((store) => store.mastery.chessBoard)

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
            src={`pieces/${name}.png`}
            className={`${getPieceStyle(name[1], x, y)} ${pointerEvents}`}
            onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
            alt='error'
        />
    )
}
