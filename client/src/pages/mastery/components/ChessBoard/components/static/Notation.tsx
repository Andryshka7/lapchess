import { left, top } from 'config/styles/piece'

const letters = 'abcdefgh'
const digits = '87654321'

const Notation = () => (
    <div className='pointer-events-none absolute h-full w-full'>
        {letters.split('').map((letter, index) => (
            <div
                className={`absolute top-[96.2%] h-[12.5%] w-[12.5%] ${left(index)} `}
                key={`letter${index}`}
            >
                <b className='m-[5%]'>{letter}</b>
            </div>
        ))}
        {digits.split('').map((digit, index) => (
            <div
                className={`absolute left-[98%] h-[12.5%] w-[12.5%] ${top(index)}`}
                key={`digit${index}`}
            >
                <b>{digit}</b>
            </div>
        ))}
    </div>
)

export default Notation
