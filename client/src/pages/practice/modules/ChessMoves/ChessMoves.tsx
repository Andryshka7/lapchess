import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import practiceIcon from 'assets/practice.png'
import { switchCurrent } from 'pages/practice/store/practiceSlice'

const ChessMoves = () => {
    const dispatch = useAppDispatch()
    const { chessBoard } = useAppSelector((store) => store.practice)

    const pairCount = Math.ceil(chessBoard.chessMoves.length / 2)
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
                <img src={practiceIcon} className='h-6 ml-3 mr-2' alt='' />
                <h2 className='text-lg text font-semibold'>Practice</h2>
            </div>
            <div className='h-[580px] scrollbar-thin flex overflow-hidden overflow-y-scroll'>
                <div className='mx-auto w-[40px] text-center'>
                    {Array.from({ length: pairCount }, (_, index) => (
                        <p className='block text-bold' key={`number ${index}`}>
                            {index + 1}
                        </p>
                    ))}
                </div>
                <div className='w-[260px]'>
                    {chessBoard.chessMoves.map((move, index) => (
                        <p
                            className={`w-1/2 float-left text-center font-semibold bg-stone-500 ${
                                index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'
                            }`}
                            key={`chessmove${index}`}
                            onClick={() => dispatch(switchCurrent(index + 1))}
                        >
                            {move}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChessMoves
