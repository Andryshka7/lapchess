import { left, top } from 'config'
import { useAppSelector } from 'redux/store'

const CheckStatus = () => {
    const { checkStatus } = useAppSelector((store) => store.chess.chessBoard)
    if (!checkStatus) return null

    const [x, y] = checkStatus

    return (
        <div
            className={`absolute ${left(x)} ${top(y)} 
                h-[12.5%] w-[12.5%] scale-[0.8] rounded-3xl bg-red-600 shadow-md blur-md`}
        />
    )
}

export default CheckStatus
