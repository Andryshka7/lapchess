import { indicatorColor } from 'config/styles/chessBoard'
import { switchPosition } from 'pages/mastery/redux/actions'
import { useAppDispatch, useAppSelector } from 'redux/store'

const Moves = () => {
	const dispatch = useAppDispatch()
	const position = useAppSelector((store) => store.mastery.position)
	const chessMoves = useAppSelector((store) => store.mastery.chessBoard.chessMoves)

	return (
		<div className="w-11/12">
			{chessMoves.map((move, index) => {
				const bgOpacity =
					position === index + 1
						? indicatorColor
						: `bg-stone-500 ${index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'}`

				return (
					<p
						className={`float-left w-1/2 cursor-pointer text-center font-semibold ${bgOpacity}`}
						key={`chessmove${index}`}
						onClick={() => dispatch(switchPosition(index + 1))}
					>
						{move}
					</p>
				)
			})}
		</div>
	)
}

export default Moves
