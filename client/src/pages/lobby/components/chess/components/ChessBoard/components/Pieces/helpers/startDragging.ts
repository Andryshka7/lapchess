import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { handleMove, selectPiece } from 'pages/lobby/store/actions'

interface Dragging {
    element: HTMLElement
    coordinates: number[]
    startingPosition: number[]
}

const useStartDragging = () => {
    const dispatch = useAppDispatch()
    const {
        position,
        chessBoard: { globalNextMoves }
    } = useAppSelector((store) => store.mastery)

    const [dragging, setDragging] = useState<null | Dragging>(null)

    const following = (event: MouseEvent) => {
        const { element, coordinates, startingPosition } = dragging as Dragging

        const [x1, y1] = coordinates
        const [startingX, startingY] = startingPosition

        const difX = event.clientX - startingX
        const difY = event.clientY - startingY

        element.style.left = `${element.clientWidth * x1 + difX}px`
        element.style.top = `${element.clientWidth * y1 + difY}px`
    }

    const unFollow = (event: MouseEvent) => {
        setDragging(null)

        const { element, coordinates, startingPosition } = dragging as Dragging

        const [x1, y1] = coordinates
        const [startingX, startingY] = startingPosition

        const difX = event.clientX - startingX
        const difY = event.clientY - startingY

        const x2 = Math.round(x1 + difX / element.clientWidth)
        const y2 = Math.round(y1 + difY / element.clientWidth)

        element.style.transition = '200ms'
        element.style.zIndex = '1'
        element.style.left = ''
        element.style.top = ''

        if (globalNextMoves.includesDeeply([x2, y2])) {
            dispatch(handleMove({ x: x2, y: y2 }))
        }
    }

    useEffect(() => {
        if (dragging) {
            const { element } = dragging

            element.style.zIndex = '2'
            element.style.transition = 'none'

            window.addEventListener('mousemove', following)
            window.addEventListener('mouseup', unFollow)
        }

        return () => {
            window.removeEventListener('mousemove', following)
            window.removeEventListener('mouseup', unFollow)

            if (dragging) {
                const { element } = dragging

                element.style.transition = '200ms'
                element.style.zIndex = '1'
                element.style.left = ''
                element.style.top = ''
            }
        }
    }, [dragging])

    useEffect(() => {
        setDragging(null)
    }, [position])

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
