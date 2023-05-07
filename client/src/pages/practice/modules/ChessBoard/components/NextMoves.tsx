import { useAppSelector } from 'redux/store'
import { leftPos, topPos } from '../helpers/positionValues'

const bg1 = 'bg-[rgb(255,195,151)]'
const bg2 = 'bg-[rgb(39,39,39)]'

const NextMoves = () => {
    const { globalNextMoves, gameField } = useAppSelector((store) => store.practice)

    const style = (x: number, y: number) =>
        `absolute ${leftPos[x]} ${topPos[y]} w-[12.5%] h-[12.5%] pointer-events-none`

    return (
        <>
            {globalNextMoves.map(([x, y]) =>
                gameField[y][x] === '0' ? (
                    <div
                        className={`${style(x, y)} rounded-full scale-[0.25] bg-blue-500`}
                        key={`dot${x}${y}`}
                    />
                ) : (
                    <div className={`${style(x, y)}  bg-blue-500`}>
                        <div className={`h-full w-full rounded-[40%] ${(x + y) % 2 ? bg2 : bg1}`}></div>
                    </div>
                )
            )}
        </>
    )
}

export default NextMoves
