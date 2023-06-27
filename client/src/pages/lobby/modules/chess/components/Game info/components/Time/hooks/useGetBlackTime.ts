import { useAppSelector } from 'redux/store'

const useGetBlackTime = () => {
    const {
        time: { whiteElapsedTime, blackElapsedTime, limit, addition, startingPoint },
        chessBoard: { turn, chessMoves }
    } = useAppSelector((store) => store.chess)

    if (!limit || !startingPoint || chessMoves.length < 2) return null

    const movesAmount = Math.floor(chessMoves.length / 2)
    const extraTime = (movesAmount - 1) * addition
    const timeElapsed = Date.now() - startingPoint - whiteElapsedTime

    return limit - (turn === 'b' ? timeElapsed : blackElapsedTime) + extraTime
}

export default useGetBlackTime
