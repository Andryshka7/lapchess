import { useAppDispatch } from 'redux/store'
import { handleMove } from '../store/chessBoardSlice'

const cellsArray: number[][] = []

const color1 = 'bg-[rgb(255,195,151)]'
const color2 = 'bg-[rgb(39,39,39)]'

for (let i = 0; i < 64; i++) {
    cellsArray.push([i % 8, Math.floor(i / 8)])
}

const Cells = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            {cellsArray.map(([x, y]) => (
                <div
                    className={`${(x + y) % 2 ? color2 : color1} w-[12.5%] h-[12.5%] float-left`}
                    onClick={() => dispatch(handleMove({ x, y }))}
                    key={`cell${x}${y}`}
                ></div>
            ))}
        </>
    )
}

export default Cells
