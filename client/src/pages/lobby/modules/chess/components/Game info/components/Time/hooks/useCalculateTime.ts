import { useAppSelector } from 'redux/store'

const useCalculateTime = (color: 'w' | 'b') => {
    const {
        time: { blackElapsedTime, whiteElapsedTime, limit, addition, startingPoint },
        chessBoard: {
            chessMoves,
            gameStatus: { draw, winner }
        }
    } = useAppSelector((store) => store.chess)

    const currentTime = Date.now()

    if (chessMoves.length < 2 || !startingPoint || !limit) {
        return { isActive: false, timeLeft: limit, currentTime }
    }

    const whiteMovesAmount = Math.ceil(chessMoves.length / 2)
    const blackMovesAmount = Math.floor(chessMoves.length / 2)

    const movesAmount = color === 'w' ? whiteMovesAmount : blackMovesAmount

    const extraTime = (movesAmount - 1) * addition

    const turn = chessMoves.length % 2 === 0 ? 'w' : 'b'

    const isActive = turn === color && !(winner || draw)

    const playerElapsedTime = color === 'w' ? whiteElapsedTime : blackElapsedTime
    const opponentElapsedTime = color === 'w' ? blackElapsedTime : whiteElapsedTime

    const timeElapsed = currentTime - startingPoint - opponentElapsedTime
    const timeLeft = limit - (isActive ? timeElapsed : playerElapsedTime) + extraTime

    return { isActive, timeLeft, currentTime }
}

export default useCalculateTime
