import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchCurrent } from 'pages/mastery/store/masterySlice'
import { indicatorColor } from 'config'

const Moves = () => {
    const dispatch = useAppDispatch()
    const { current, chessBoard } = useAppSelector((store) => store.mastery)

    const bgColor = (index: number) =>
        current - 1 === index
            ? indicatorColor
            : `bg-stone-500 ${index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'}`

    return (
        <div className='w-[260px]'>
            {chessBoard.chessMoves.map((move, index) => (
                <p
                    className={`${bgColor(index)} w-1/2 float-left text-center font-semibold`}
                    key={`chessmove${index}`}
                    onClick={() => dispatch(switchCurrent(index + 1))}
                >
                    {move}
                </p>
            ))}
        </div>
    )
}

export default Moves
