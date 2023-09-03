import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchPosition } from '../../redux/actions'

const MobileChessMoves = () => {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement | null>(null)

    const position = useAppSelector((store) => store.chess.position)
    const chessMoves = useAppSelector((store) => store.chess.chessBoard.chessMoves)

    useEffect(() => {
        if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth
    }, [chessMoves])

    return (
        <div className='mt-1 w-full rounded-lg bg-black bg-opacity-5 sm:w-[620px] lg:hidden'>
            <div className='crollbar-thin flex overflow-x-scroll' ref={ref}>
                {chessMoves.map((move, index) => (
                    <div
                        className={`mb-2 inline min-w-fit rounded px-2 py-1 font-semibold ${
                            index === position - 1 ? 'bg-neutral-600' : ''
                        }`}
                        onClick={() => dispatch(switchPosition(index + 1))}
                        key={move + index}
                    >
                        {index + 1}. {move}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileChessMoves
