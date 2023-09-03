import { createSelector } from '@reduxjs/toolkit'
import { RootState, useAppSelector } from 'redux/store'

const gameStatusSelector = createSelector(
    [(store: RootState) => store.chess.positionHistory],
    (positionHistory) => positionHistory[positionHistory.length - 1].gameStatus
)

const useCalculateTime = (color: 'w' | 'b') => {
    const cancelled = useAppSelector((store) => store.chess.status.cancelled)
    const chessMoves = useAppSelector((store) => store.chess.chessBoard.chessMoves)

    const { white, black, limit, addition, initTime } = useAppSelector((store) => store.chess.time)
    const { winner, draw } = useAppSelector(gameStatusSelector)

    const turn = chessMoves.length % 2 === 0 ? 'w' : 'b'
    const isActive = turn === color && !(winner || draw || cancelled) && chessMoves.length >= 2

    const calculateTime = () => {
        const currentTime = Date.now()

        if (chessMoves.length < 2 || !initTime || !limit) {
            return { time: limit, isActive, currentTime }
        }

        const startingPoint = initTime + white.firstMoveTime + black.firstMoveTime

        const whiteMovesAmount = Math.ceil(chessMoves.length / 2)
        const blackMovesAmount = Math.floor(chessMoves.length / 2)

        const movesAmount = color === 'w' ? whiteMovesAmount : blackMovesAmount

        const extraTime = (movesAmount - 1) * addition

        const playerElapsedTime = color === 'w' ? white.elapsedTime : black.elapsedTime
        const opponentElapsedTime = color === 'w' ? black.elapsedTime : white.elapsedTime

        const timeElapsed = currentTime - startingPoint - opponentElapsedTime
        const time = limit - (isActive ? timeElapsed : playerElapsedTime) + extraTime

        return { time, isActive, currentTime }
    }

    return calculateTime
}

export default useCalculateTime
