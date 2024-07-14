import { left, top } from 'config/styles/piece'
import { findPiece } from 'helpers'
import { handleMove } from 'pages/mastery/redux/actions'
import { useAppDispatch, useAppSelector } from 'redux/store'

import useStartDragging from './hooks/useStartDragging'

interface PieceProps {
	piece: string
}

const Piece = ({ piece }: PieceProps) => {
	const dispatch = useAppDispatch()
	const { chessBoard } = useAppSelector((store) => store.mastery)

	const startDragging = useStartDragging()

	const { turn, nextMoves, gameField, selected } = chessBoard

	const position = findPiece(piece, gameField)

	if (!position) return null

	const [x, y] = position
	const name = gameField[y][x].slice(0, 2)

	const pointerEvents =
		nextMoves.includesDeeply([x, y]) || name[0] === turn
			? 'pointer-events-all'
			: 'pointer-events-none'

	const handleMouseClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		if (selected && nextMoves.includesDeeply([x, y])) {
			const { x: x1, y: y1 } = selected
			const coordinates = [
				[x1, y1],
				[x, y]
			]
			dispatch(handleMove({ coordinates }))
		} else if (turn === name[0]) {
			const startingPosition = [event.clientX, event.clientY]
			startDragging(event.currentTarget, position, startingPosition)
		}
	}
	const piecePos = `${left(x)} ${top(y)}`

	return (
		<img
			src={`pieces/${name}.png`}
			className={`absolute z-[1] h-[12.5%] w-[12.5%] scale-[0.8] object-contain transition-all duration-200 hover:scale-[0.85] ${piecePos} ${pointerEvents}`}
			onMouseDown={(e) => e.button === 0 && handleMouseClick(e)}
		/>
	)
}

export default Piece
