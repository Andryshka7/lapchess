import useTimer from './hooks/useTimer'

interface TimerProps {
    color: 'w' | 'b'
}

const Timer = ({ color }: TimerProps) => {
    const time = useTimer(color)

    return (
        <div className='flex h-8 w-20 items-center justify-center rounded-md bg-white bg-opacity-5 text-xl font-semibold'>
            {time}
        </div>
    )
}

export default Timer
