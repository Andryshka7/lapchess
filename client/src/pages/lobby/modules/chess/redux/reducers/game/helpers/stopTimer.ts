import { Chess } from '../../../types/Chess'

const stopTimer = (state: Chess, currentTime: number) => {
    const {
        time,
        chessBoard: { turn }
    } = state

    const { lastMove } = time

    if (turn === 'w' && lastMove) {
        time.whiteElapsedTime += currentTime - lastMove
    } else if (turn === 'b' && lastMove) {
        time.blackElapsedTime += currentTime - lastMove
    }
}

export default stopTimer
