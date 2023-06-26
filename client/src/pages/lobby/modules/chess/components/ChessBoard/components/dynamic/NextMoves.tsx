import { useAppSelector } from 'redux/store'
import { left, top } from 'config/styles/piece'
import { cellColor1, cellColor2, indicatorColor } from 'config/styles/chessBoard'

const NextMoves = () => {
    const {
        color,
        chessBoard: { nextMoves, gameField }
    } = useAppSelector((store) => store.chess)

    const style = (x: number, y: number) =>
        `absolute ${left(x)} ${top(y)} w-[12.5%] h-[12.5%] pointer-events-none`

    return (
        <>
            {nextMoves.map(([x, y]) => {
                const target = gameField[y][x]

                x = color === 'b' ? 7 - x : x
                y = color === 'b' ? 7 - y : y

                return target === '0' ? (
                    <div
                        className={`${style(x, y)} scale-[0.25] rounded-full ${indicatorColor}`}
                        key={`nextmove${x}${y}`}
                    />
                ) : (
                    <div className={`${style(x, y)} ${indicatorColor}`} key={`nextmove${x}${y}`}>
                        <div
                            className={`h-full w-full rounded-[40%] ${
                                (x + y) % 2 ? cellColor2 : cellColor1
                            }`}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default NextMoves
