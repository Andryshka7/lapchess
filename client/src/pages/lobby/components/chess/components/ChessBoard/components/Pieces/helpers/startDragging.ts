import { useAppDispatch, useAppSelector } from 'redux/store'
import { handleMove, selectPiece } from 'pages/lobby/store/actions'
import { getNextMoves } from '.'

// REALY NEEDS HELP


const useStartDragging = () => {
    const dispatch = useAppDispatch()

    const { chessBoard } = useAppSelector((store) => store.lobby.chess)

    return (
        event: React.MouseEvent<HTMLImageElement, MouseEvent>,
        k: number,
        [x1, y1]: number[]
    ) => {
        const nextMoves = getNextMoves([x1, y1], chessBoard)
        dispatch(selectPiece({ x: x1, y: y1, nextMoves }))

        const element = event.target as HTMLElement

        element.style.zIndex = '2'
        element.style.transition = 'none'

        const startingX = event.clientX
        const startingY = event.clientY

        const following = (event: MouseEvent) => {
            const difX = k * (event.clientX - startingX)
            const difY = k * (event.clientY - startingY)

            element.style.left = `${element.clientWidth * x1 + difX}px`
            element.style.top = `${element.clientWidth * y1 + difY}px`
        }

        const unFollow = (event: MouseEvent) => {
            element.style.transition = '200ms'

            const difX = k * (event.clientX - startingX)
            const difY = k * (event.clientY - startingY)

            const x2 = Math.round(x1 + difX / element.clientWidth)
            const y2 = Math.round(y1 + difY / element.clientWidth)

            element.style.zIndex = '1'
            element.style.left = ''
            element.style.top = ''

            if (nextMoves.includesDeeply([x2, y2])) {
                dispatch(handleMove({ x: x2, y: y2 }))
            }

            window.removeEventListener('mousemove', following)
            window.removeEventListener('mouseup', unFollow)
        }

        window.addEventListener('mousemove', following)
        window.addEventListener('mouseup', unFollow)
    }
}

export default useStartDragging


// import { useAppDispatch, useAppSelector } from 'redux/store'
// import { handleMove, selectPiece } from 'pages/lobby/store/actions'
// import { findPiece, getNextMoves } from '.'

// const useStartDragging = (piece: string) => {
//     const dispatch = useAppDispatch()
//     const { chessBoard } = useAppSelector((store) => store.lobby.chess)
//     const { gameField } = chessBoard

//     const [x1, y1] = findPiece(piece, gameField) as [number, number]
//     const nextMoves = getNextMoves([x1, y1], chessBoard)

//     const startFollowing = (event: MouseEvent, k: number) => {
//         const element = event.target as HTMLElement

//         element.style.zIndex = '2'
//         element.style.transition = 'none'

//         const startingX = event.clientX
//         const startingY = event.clientY

//         const following = (event: MouseEvent) => {
//             const difX = k * (event.clientX - startingX)
//             const difY = k * (event.clientY - startingY)

//             element.style.left = `${element.clientWidth * x1 + difX}px`
//             element.style.top = `${element.clientWidth * y1 + difY}px`
//         }
//     }

//     return (event: MouseEvent, k: number, [x1, y1]: number[]) => {
//         dispatch(selectPiece({ x: x1, y: y1, nextMoves }))

//         const unFollow = (event: MouseEvent) => {
//             element.style.transition = '200ms'

//             const difX = k * (event.clientX - startingX)
//             const difY = k * (event.clientY - startingY)

//             const x2 = Math.round(x1 + difX / element.clientWidth)
//             const y2 = Math.round(y1 + difY / element.clientWidth)

//             element.style.zIndex = '1'
//             element.style.left = ''
//             element.style.top = ''

//             if (nextMoves.includesDeeply([x2, y2])) {
//                 dispatch(handleMove({ x: x2, y: y2 }))
//             }

//             window.removeEventListener('mousemove', following)
//             window.removeEventListener('mouseup', unFollow)
//         }

//         window.addEventListener('mousemove', following)
//         window.addEventListener('mouseup', unFollow)
//     }
// }

// export default useStartDragging
