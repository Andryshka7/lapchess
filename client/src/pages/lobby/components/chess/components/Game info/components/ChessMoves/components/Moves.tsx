import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchPosition } from 'pages/lobby/redux/actions'

const Moves = () => {
    const dispatch = useAppDispatch()
    const { chessMoves } = useAppSelector((store) => store.lobby.chess.chessBoard)

    const bgColor = (index: number) =>
        `bg-stone-500 ${index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'}`

    return (
        <div className='w-[260px]'>
            {chessMoves.map((move, index) => (
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
