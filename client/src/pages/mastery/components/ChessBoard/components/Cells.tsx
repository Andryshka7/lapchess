import { useAppDispatch, useAppSelector } from 'redux/store'
import { clearField, handleMove } from '../../../store/masterySlice'
import { cellColor1, cellColor2, left, top } from 'config'

const cellsArray: number[][] = []
for (let i = 0; i < 64; i++) cellsArray.push([i % 8, Math.floor(i / 8)])

const Cells = () => {
    const dispatch = useAppDispatch()
    const { selected, globalNextMoves } = useAppSelector((store) => store.mastery.chessBoard)

    return (
        <>
            {cellsArray.map(([x, y]) => {
                const bgColor = (x + y) % 2 ? cellColor1 : cellColor2
                return (
                    <div
                        className={`${bgColor} ${left(x)} ${top(y)} absolute h-[12.5%] w-[12.5%]`}
                        onClick={() => {
                            if (selected && globalNextMoves.includesDeeply([x, y])) {
                                dispatch(handleMove({ x, y }))
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
