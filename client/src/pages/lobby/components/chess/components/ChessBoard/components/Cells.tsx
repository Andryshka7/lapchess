import { useAppDispatch, useAppSelector } from 'redux/store'
import { clearField, handleMove } from 'pages/lobby/store/actions'
import { cellColor1, cellColor2 } from 'config/styles'

const cellsArray: number[][] = []

for (let i = 0; i < 64; i++) cellsArray.push([i % 8, Math.floor(i / 8)])

const Cells = () => {
    const dispatch = useAppDispatch()
    const { selected, globalNextMoves } = useAppSelector((store) => store.lobby.chess.chessBoard)

    return (
        <>
            {cellsArray.map(([x, y]) => {
                const bgColor = (x + y) % 2 ? cellColor1 : cellColor2

                const handleOnClick = () => {
                    if (selected && globalNextMoves.includesDeeply([x, y])) {
                        dispatch(handleMove({ x, y }))
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
