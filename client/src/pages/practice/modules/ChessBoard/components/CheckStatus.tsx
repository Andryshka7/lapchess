import { useAppSelector } from 'redux/store'
import { leftPos, topPos } from '../helpers/positionValues'

const CheckStatus = () => {
    const { checkStatus } = useAppSelector((store) => store.practice)
    if (!checkStatus) return <></>

    const [x, y] = checkStatus

    return (
        checkStatus && (
            <div
                className={`absolute ${leftPos[x]} ${topPos[y]} 
                w-[12.5%] h-[12.5%] bg-red-600 shadow-md blur-md rounded-3xl scale-[0.8]`}
            ></div>
        )
    )
}

export default CheckStatus
