import { Chess } from '../../../types/Chess'

const handleTimeControls = (state: Chess, currentTime: number) => {
    const {
        time,
        chessBoard: { turn, chessMoves }
    } = state

    const { white, black, lastMove, initTime } = time

    if (chessMoves.length === 1 && initTime) {
        white.firstMoveTime = currentTime - initTime
    } else if (chessMoves.length === 2 && lastMove) {
        black.firstMoveTime = currentTime - lastMove
    } else if (chessMoves.length > 2 && lastMove) {
        const timePassed = currentTime - lastMove

        if (turn === 'b') {
            white.elapsedTime += timePassed
        } else {
            black.elapsedTime += timePassed
        }
        time.lastMove = currentTime
    }

    time.lastMove = currentTime
}

export default handleTimeControls
