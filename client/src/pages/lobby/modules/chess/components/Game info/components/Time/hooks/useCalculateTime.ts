import { useAppSelector } from 'redux/store'

const useCalculateTime = (color: 'w' | 'b') => {
    const {
        time: { white, black, limit, addition, initTime },
        positionHistory,
        chessBoard: { chessMoves }
    } = useAppSelector((store) => store.chess)

    const { winner, draw } = positionHistory[positionHistory.length - 1].gameStatus

    const turn = chessMoves.length % 2 === 0 ? 'w' : 'b'
    const isActive = turn === color && !(winner || draw)

    const calculateTime = () => {
        const currentTime = Date.now()

        if (chessMoves.length < 2 || !initTime || !limit) {
            return { time: limit, currentTime }
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

        return { time, currentTime }
    }

    return calculateTime
}

export default useCalculateTime
