import { useAppDispatch, useAppSelector } from 'redux/store'
import { clearField, handleMove } from 'pages/lobby/redux/actions'
import { cellColor1, cellColor2 } from 'config/styles'

const cellsArray: number[][] = []

for (let i = 0; i < 64; i++) {
    const x = i % 8
    const y = Math.floor(i / 8)
    cellsArray.push([x, y])
}

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
