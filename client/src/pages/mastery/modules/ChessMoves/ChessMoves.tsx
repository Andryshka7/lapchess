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
            className='w-[300px] h-[620px] overflow-hidden ml-2 rounded-lg bg-black bg-opacity-10'
            ref={ref}
        >
            <div className='flex h-[40px] items-center'>
                <img src={masteryIcon} className='h-6 ml-3 mr-2' alt='' />
                <h2 className='text-lg text font-semibold'>Practice</h2>
            </div>

            <div className='h-[580px] scrollbar-thin flex overflow-hidden overflow-y-scroll'>
                <Indexes />
                <Moves />
            </div>
        </div>
    )
}

export default ChessMoves
