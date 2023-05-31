import { useEffect, useRef } from 'react'
import { useAppSelector } from 'redux/store'
import masteryIcon from 'assets/mastery.png'
import Moves from './components/Moves'
import Indexes from './components/Indexes'

const ChessMoves = () => {
    const { chessBoard } = useAppSelector((store) => store.mastery)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
    }, [chessBoard.chessMoves])

    return (
        <div
            className='ml-2 h-[620px] w-[300px] overflow-hidden rounded-lg bg-black bg-opacity-10'
            ref={ref}
        >
            <div className='flex h-[40px] items-center'>
                <img src={masteryIcon} className='ml-3 mr-2 h-6' alt='' />
                <h2 className='text text-lg font-semibold'>Practice</h2>
            </div>

            <div className='scrollbar-thin flex h-[580px] overflow-hidden overflow-y-scroll'>
                <Indexes />
                <Moves />
            </div>
        </div>
    )
}

export default ChessMoves
