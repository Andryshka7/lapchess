import { useAppSelector } from 'redux/store'

const useGetWhiteTime = () => {
    const {
        time: { blackElapsedTime, whiteElapsedTime, limit, addition, startingPoint },
        chessBoard: { turn, chessMoves }
    } = useAppSelector((store) => store.chess)

    if (!limit || !startingPoint || chessMoves.length < 2) return null

    const movesAmount = Math.ceil(chessMoves.length / 2)
    const extraTime = (movesAmount - 1) * addition
    const timeElapsed = Date.now() - startingPoint - blackElapsedTime

    return limit - (turn === 'w' ? timeElapsed : whiteElapsedTime) + extraTime
}

export default useGetWhiteTime
