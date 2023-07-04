import { useAppSelector } from 'redux/store'
import { left, top } from 'config/styles/piece'

const CheckStatus = () => {
    const color = useAppSelector((store) => store.chess.color)
    const check = useAppSelector((store) => store.chess.chessBoard.gameStatus.check)

    if (!check) return null

    const [x, y] = check

    const checkPos = `${left(color === 'b' ? 7 - x : x)} ${top(color === 'b' ? 7 - y : y)}`

    return (
        <div
            className={`absolute h-[12.5%] w-[12.5%] scale-[0.8] rounded-3xl bg-red-600 shadow-md blur-md ${checkPos}`}
        />
    )
}

export default CheckStatus
