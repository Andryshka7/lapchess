import { left, top } from 'config'
import { useAppSelector } from 'redux/store'

const Notation = () => {
    const { color } = useAppSelector((store) => store.chess)

    const isReversed = color === 'b' ? 'rotate-180' : ''

    const letters = color === 'b' ? 'hgfedcba' : 'abcdefgh'
    const digits = color === 'b' ? '12345678' : '87654321'

    return (
        <div className={`pointer-events-none relative h-full w-full ${isReversed}`}>
            {letters.split('').map((letter, index) => (
                <div
                    className={`absolute top-[96.2%] h-[12.5%] w-[12.5%] ${left(index)} `}
                    key={`letter ${index}`}
                >
                    <b className='m-[5%]'>{letter}</b>
                </div>
            ))}
            {digits.split('').map((digit, index) => (
                <div
                    className={`absolute left-[98%] h-[12.5%] w-[12.5%] ${top(index)}`}
                    key={`digit ${index}`}
                >
                    <b>{digit}</b>
                </div>
            ))}
        </div>
    )
}

export default Notation
