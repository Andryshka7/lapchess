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

    const letters = color === 'b' ? 'hgfedcba' : 'abcdefgh'
    const digits = color === 'b' ? '12345678' : '87654321'

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
                        className={`relative float-left h-[12.5%] w-[12.5%] ${bgColor}`}
                        onClick={handleOnClick}
                        key={`cell${x}${y}`}
                    >
                        {x === (color === 'w' ? 7 : 0) && (
                            <h1 className='absolute right-0 top-0 mx-0.5 text-[3vw] font-semibold sm:text-base lg:mx-1'>
                                {digits[y]}
                            </h1>
                        )}
                        {y === (color === 'w' ? 7 : 0) && (
                            <h1 className='absolute bottom-0 left-0 mx-0.5 text-[3vw] font-semibold sm:text-base lg:mx-1'>
                                {letters[x]}
                            </h1>
                        )}
                    </div>
                )
            })}
        </>
    )
}

export default Cells
