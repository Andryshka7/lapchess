import { useAppDispatch, useAppSelector } from 'redux/store'
import { clearField, handleMove } from 'pages/lobby/modules/chess/redux/actions'
import { cellColor1, cellColor2 } from 'config/styles/chessBoard'

const cellsArray: number[][] = []

for (let i = 0; i < 64; i++) {
    const x = i % 8
    const y = Math.floor(i / 8)
    cellsArray.push([x, y])
}

const Cells = () => {
    const dispatch = useAppDispatch()
    const color = useAppSelector((store) => store.chess.color)
    const selected = useAppSelector((store) => store.chess.chessBoard.selected)
    const nextMoves = useAppSelector((store) => store.chess.chessBoard.nextMoves)

    return (
        <>
            {cellsArray.map(([x, y]) => {
                const bgColor = (x + y) % 2 ? cellColor2 : cellColor1

                x = color === 'b' ? 7 - x : x
                y = color === 'b' ? 7 - y : y

                const handleOnClick = () => {
                    if (selected && nextMoves.includesDeeply([x, y])) {
                        const { x: x1, y: y1 } = selected
                        const coordinates = [
                            [x1, y1],
                            [x, y]
                        ]
                        const time = Date.now()
                        dispatch(handleMove({ coordinates, time }))
                    } else {
                        dispatch(clearField())
                    }
                }
                return (
                    <div
                        className={`float-left h-[12.5%] w-[12.5%] ${bgColor}`}
                        onClick={handleOnClick}
                        key={`cell${x}${y}`}
                    />
                )
            })}
        </>
    )
}

export default Cells
