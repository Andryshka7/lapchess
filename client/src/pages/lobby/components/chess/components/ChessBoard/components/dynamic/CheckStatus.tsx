import { left, top } from 'config/styles'
import { useAppSelector } from 'redux/store'

const CheckStatus = () => {
    const { check } = useAppSelector((store) => store.lobby.chess.chessBoard.gameStatus)
    if (!check) return null

    const [x, y] = check

    return (
        <div
            className={`absolute ${left(x)} ${top(y)} 
                h-[12.5%] w-[12.5%] scale-[0.8] rounded-3xl bg-red-600 shadow-md blur-md`}
        />
    )
}

export default CheckStatus
