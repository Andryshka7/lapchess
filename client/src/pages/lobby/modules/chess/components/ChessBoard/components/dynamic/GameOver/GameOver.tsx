import { useAppSelector } from 'redux/store'

import { QuitButton, RestartButton } from './components'

const GameOver = () => {
	const { winner, draw } = useAppSelector((store) => store.chess.chessBoard.gameStatus)
	const cancelled = useAppSelector((store) => store.chess.status.cancelled)

	if (!(winner || draw || cancelled)) return null

	const victoryText = winner === 'w' ? 'White wins!' : 'Black wins!'

	return (
		<div className="absolute left-0 top-0 z-[3] flex h-full w-full items-center justify-center bg-black bg-opacity-70">
			<div className="flex h-fit w-fit flex-col gap-20">
				{cancelled ? (
					<h1 className="text-center text-6xl font-bold">Cancelled</h1>
				) : (
					<h1 className="text-center text-5xl font-bold">
						{draw ? 'Draw!' : victoryText}
					</h1>
				)}
				{!cancelled && <RestartButton />}
				<QuitButton />
			</div>
		</div>
	)
}

export default GameOver
