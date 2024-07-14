import { useAppSelector } from 'redux/store'

const useCalculateAlertTime = () => {
	const cancelled = useAppSelector((store) => store.chess.status.cancelled)
	const chessMoves = useAppSelector((store) => store.chess.chessBoard.chessMoves)
	const { winner, draw } = useAppSelector((store) => store.chess.chessBoard.gameStatus)
	const { initTime, lastMove } = useAppSelector((store) => store.chess.time)

	return () => {
		const currentTime = Date.now()

		if (winner || draw || cancelled) return null

		if (chessMoves.length === 0 && initTime) {
			return Math.floor(20 - (currentTime - initTime) / 1000)
		} else if (chessMoves.length === 1 && lastMove) {
			return Math.floor(20 - (currentTime - lastMove) / 1000)
		} else {
			return null
		}
	}
}

export default useCalculateAlertTime
