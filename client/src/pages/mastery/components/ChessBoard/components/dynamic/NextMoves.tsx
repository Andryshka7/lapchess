import { cellColor1, cellColor2, indicatorColor } from 'config/styles/chessBoard'
import { left, top } from 'config/styles/piece'
import { useAppSelector } from 'redux/store'

const NextMoves = () => {
	const nextMoves = useAppSelector((store) => store.mastery.chessBoard.nextMoves)
	const gameField = useAppSelector((store) => store.mastery.chessBoard.gameField)

	const style = (x: number, y: number) =>
		`absolute ${left(x)} ${top(y)} w-[12.5%] h-[12.5%] pointer-events-none`

	return (
		<>
			{nextMoves.map(([x, y]) =>
				gameField[y][x] === '0' ? (
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
						></div>
					</div>
				)
			)}
		</>
	)
}

export default NextMoves
