import { useAppSelector } from 'redux/store'
import { leftPos, topPos } from '../helpers/positionValues'

const NextMoves = () => {
    const { nextMoves } = useAppSelector((store) => store.practice)
    return (
        <>
            {nextMoves.map(([x, y]) => (
                <div
                    className={`absolute ${leftPos[x]} ${topPos[y]} w-[12.5%] h-[12.5%] rounded-full scale-[0.25] bg-blue-500 pointer-events-none`}
                    key={`dot${x}${y}`}
                ></div>
            ))}
        </>
    )
}

export default NextMoves
