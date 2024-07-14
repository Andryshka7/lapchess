import { left, top } from 'config/styles/piece'
import { cancelPromotion, transformPawn } from 'pages/lobby/modules/chess/redux/actions'
import { useAppDispatch, useAppSelector } from 'redux/store'

const getChoices = ([x, y]: number[]) => {
	if (y === 0) {
		return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
	} else if (y === 7) {
		return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
	}
}

const Promotion = () => {
	const dispatch = useAppDispatch()
	const turn = useAppSelector((store) => store.chess.chessBoard.turn)
	const color = useAppSelector((store) => store.chess.color)
	const promoted = useAppSelector((store) => store.chess.chessBoard.promoted)

	if (!promoted) return null

	const x2 = color === 'b' ? 7 - promoted.x2 : promoted.x2
	const y2 = color === 'b' ? 7 - promoted.y2 : promoted.y2

	const promotionPieces = getChoices([x2, y2])

	const x = x2 < 7 ? x2 : x2 - 1
	const y = y2 < 7 ? y2 : y2 - 1

	return (
		<div
			className="absolute left-0 top-0 z-[2] h-full w-full bg-black bg-opacity-70"
			onClick={() => dispatch(cancelPromotion())}
		>
			{promotionPieces?.map((piece, index) => {
				const piecePos = `${left(x + (index % 2))} ${top(y + Math.floor(index / 2))}`

				return (
					<img
						src={`pieces/${turn + piece}.png`}
						className={`absolute z-[3] h-[12.5%] w-[12.5%] scale-[0.8] object-contain transition-all duration-200 hover:scale-[0.85] ${piecePos}`}
						key={`promotion${index}`}
						onClick={(e) => {
							e.stopPropagation()
							const payload = {
								promoted,
								transformation: piece,
								time: Date.now()
							}
							dispatch(transformPawn(payload))
						}}
					/>
				)
			})}
		</div>
	)
}

export default Promotion
