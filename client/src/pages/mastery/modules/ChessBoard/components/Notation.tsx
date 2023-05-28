import { left, top } from 'config'

const letters = 'abcdefgh'
const digits = '87654321'

const Notation = () => (
    <>
        {letters.split('').map((letter, index) => (
            <div
                className={`absolute ${left(index)} top-[96.2%] w-[12.5%] h-[12.5%] bg-transparent`}
                key={`letter${index}`}
            >
                <b className='m-[5%]'>{letter}</b>
            </div>
        ))}
        {digits.split('').map((digit, index) => (
            <div
                className={`absolute left-[98%] ${top(index)} w-[12.5%] h-[12.5%] bg-transparent`}
                key={`digit${index}`}
            >
                <b>{digit}</b>
            </div>
        ))}
    </>
)

export default Notation
