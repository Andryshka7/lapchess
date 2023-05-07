import { useAppSelector } from 'redux/store'
import { leftPos, topPos } from '../helpers/positionValues'
import chessBoardStyles from 'styles/ChessBoardStyle'

const bg1 = chessBoardStyles.cellColor1
const bg2 = chessBoardStyles.cellColor2

const dotBg = chessBoardStyles.dotColor

const NextMoves = () => {
    const { globalNextMoves, gameField } = useAppSelector((store) => store.practice)

    const style = (x: number, y: number) =>
        `absolute ${leftPos[x]} ${topPos[y]} w-[12.5%] h-[12.5%] pointer-events-none`

    return (
        <>
            {globalNextMoves.map(([x, y]) =>
                gameField[y][x] === '0' ? (
                    <div
                        className={`${style(x, y)} rounded-full scale-[0.25] ${dotBg}`}
                        key={`nextmove${x}${y}`}
                    />
                ) : (
                    <div className={`${style(x, y)} ${dotBg}`} key={`nextmove${x}${y}`}>
                        <div
                            className={`h-full w-full rounded-[40%] ${(x + y) % 2 ? bg1 : bg2}`}
                        ></div>
                    </div>
                )
            )}
        </>
    )
}

export default NextMoves
