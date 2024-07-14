import { switchPosition } from 'pages/lobby/modules/chess/redux/actions'
import { useAppDispatch, useAppSelector } from 'redux/store'

const Moves = () => {
	const dispatch = useAppDispatch()
	const chessMoves = useAppSelector((store) => store.chess.chessBoard.chessMoves)

	return (
		<div className="w-[260px]">
			{chessMoves.map((move, index) => {
				const bgOpacity = `${index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'}`

				return (
					<p
						className={`float-left w-1/2 cursor-pointer bg-stone-500 ${bgOpacity} text-center font-semibold`}
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
