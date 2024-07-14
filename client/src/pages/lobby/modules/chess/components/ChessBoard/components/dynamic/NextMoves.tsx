import { cellColor1, cellColor2, indicatorColor } from 'config/styles/chessBoard'
import { left, top } from 'config/styles/piece'
import { useAppSelector } from 'redux/store'

const NextMoves = () => {
	const color = useAppSelector((store) => store.chess.color)
	const nextMoves = useAppSelector((store) => store.chess.chessBoard.nextMoves)
	const gameField = useAppSelector((store) => store.chess.chessBoard.gameField)

	const style = (x: number, y: number) =>
		`absolute ${left(x)} ${top(y)} w-[12.5%] h-[12.5%] pointer-events-none`

	return (
		<>
			{nextMoves.map(([x, y]) => {
				const target = gameField[y][x]

				x = color === 'b' ? 7 - x : x
				y = color === 'b' ? 7 - y : y

				return target === '0' ? (
					<div
						className={`${style(x, y)} scale-[0.25] rounded-full ${indicatorColor}`}
						key={`nextmove${x}${y}`}
					/>
				) : (
					<div className={`${style(x, y)} ${indicatorColor}`} key={`nextmove${x}${y}`}>
						<div
							className={`h-full w-full rounded-[40%] ${
								(x + y) % 2 ? cellColor2 : cellColor1
							}`}
						/>
					</div>
				)
			})}
		</>
	)
}

export default NextMoves
