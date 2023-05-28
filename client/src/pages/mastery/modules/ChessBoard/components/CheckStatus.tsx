import { left, top } from 'config'
import { useAppSelector } from 'redux/store'

const CheckStatus = () => {
    const { checkStatus } = useAppSelector((store) => store.mastery.chessBoard)
    if (!checkStatus) return null

    const [x, y] = checkStatus

    return (
        <div
            className={`absolute ${left(x)} ${top(y)} 
                w-[12.5%] h-[12.5%] bg-red-600 shadow-md blur-md rounded-3xl scale-[0.8]`}
        ></div>
    )
}

export default CheckStatus
