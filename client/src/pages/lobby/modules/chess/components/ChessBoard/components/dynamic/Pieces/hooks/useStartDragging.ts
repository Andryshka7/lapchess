import { handleMove, selectPiece } from 'pages/lobby/modules/chess/redux/actions'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { Coordinates } from 'types/ChessBoard'

import { applyDraggingStyle, unApplyDraggingStyle } from './helpers'

interface Dragging {
	element: HTMLElement
	coordinates: number[]
	startingPosition: number[]
}

const useStartDragging = () => {
	const dispatch = useAppDispatch()
	const { position, color, status } = useAppSelector((store) => store.chess)
	const {
		nextMoves,
		selected,
		gameStatus: { winner, draw }
	} = useAppSelector((store) => store.chess.chessBoard)

	const [dragging, setDragging] = useState<null | Dragging>(null)

	const following = (event: MouseEvent) => {
		const { element, coordinates, startingPosition } = dragging as Dragging

		const [x1, y1] = coordinates
		const [startingX, startingY] = startingPosition

		const difX = event.clientX - startingX
		const difY = event.clientY - startingY

		const x = color === 'b' ? 7 - x1 : x1
		const y = color === 'b' ? 7 - y1 : y1

		element.style.left = `${element.clientWidth * x + difX}px`
		element.style.top = `${element.clientWidth * y + difY}px`
	}

	const unFollow = (event: MouseEvent) => {
		setDragging(null)

		const { element, coordinates, startingPosition } = dragging as Dragging

		const [x1, y1] = coordinates
		const [startingX, startingY] = startingPosition

		const k = color === 'w' ? 1 : -1

		const difX = k * (event.clientX - startingX)
		const difY = k * (event.clientY - startingY)

		const x2 = Math.round(x1 + difX / element.clientWidth)
		const y2 = Math.round(y1 + difY / element.clientWidth)

		unApplyDraggingStyle(element)

		if (nextMoves.includesDeeply([x2, y2])) {
			const { x: x1, y: y1 } = selected as Coordinates
			const coordinates = [
				[x1, y1],
				[x2, y2]
			]
			const time = Date.now()
			dispatch(handleMove({ coordinates, time }))
		}
	}

	useEffect(() => {
		if (dragging) {
			const { element } = dragging
			applyDraggingStyle(element)

			window.addEventListener('mousemove', following)
			window.addEventListener('mouseup', unFollow)
		}

		return () => {
			window.removeEventListener('mousemove', following)
			window.removeEventListener('mouseup', unFollow)

			if (dragging) {
				const { element } = dragging
				unApplyDraggingStyle(element)
			}
		}
	}, [dragging])

	useEffect(() => {
		setDragging(null)
	}, [position, winner, draw, status])

	return (element: HTMLElement, coordinates: number[], startingPosition: number[]) => {
		const [x1, y1] = coordinates
		dispatch(selectPiece({ x: x1, y: y1 }))
		setDragging({
			element,
			coordinates,
			startingPosition
		})
	}
}

export default useStartDragging
