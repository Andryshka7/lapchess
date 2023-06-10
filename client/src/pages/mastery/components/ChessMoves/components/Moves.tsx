import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchPosition } from 'pages/mastery/store/masterySlice'
import { indicatorColor } from 'config'

const Moves = () => {
    const dispatch = useAppDispatch()
    const { position, chessBoard } = useAppSelector((store) => store.mastery)

    const bgColor = (index: number) =>
        position - 1 === index
            ? indicatorColor
            : `bg-stone-500 ${index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'}`

    return (
        <div className='w-[260px]'>
            {chessBoard.chessMoves.map((move, index) => (
                <p
                    className={`${bgColor(index)} float-left w-1/2 text-center font-semibold`}
                    key={`chessmove${index}`}
                    onClick={() => dispatch(switchPosition(index + 1))}
                >
                    {move}
                </p>
            ))}
        </div>
    )
}

export default Moves
