import { useAppDispatch, useAppSelector } from 'redux/store'
import { clearField, handleMove } from 'pages/mastery/redux/actions'
import { cellColor1, cellColor2, left, top } from 'config/styles'

const cellsArray: number[][] = []
for (let i = 0; i < 64; i++) cellsArray.push([i % 8, Math.floor(i / 8)])

const Cells = () => {
    const dispatch = useAppDispatch()
    const { selected, nextMoves } = useAppSelector((store) => store.mastery.chessBoard)

    return (
        <>
            {cellsArray.map(([x, y]) => {
                const bgColor = (x + y) % 2 ? cellColor1 : cellColor2
                return (
                    <div
                        className={`${bgColor} ${left(x)} ${top(y)} absolute h-[12.5%] w-[12.5%]`}
                        onClick={() => {
                            if (selected && nextMoves.includesDeeply([x, y])) {
                                const { x: x1, y: y1 } = selected
                                const movePayload = [
                                    [x1, y1],
                                    [x, y]
                                ]
                                dispatch(handleMove(movePayload))
                            } else {
                                dispatch(clearField())
                            }
                        }}
                        key={`cell${x}${y}`}
                    ></div>
                )
            })}
        </>
    )
}

export default Cells
