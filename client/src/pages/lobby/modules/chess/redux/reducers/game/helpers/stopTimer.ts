import { Chess } from '../../../types/Chess'

const stopTimer = (state: Chess, currentTime: number) => {
    const {
        time,
        chessBoard: { turn }
    } = state

    const { lastMove } = time

    if (turn === 'w' && lastMove) {
        time.white.elapsedTime += currentTime - lastMove
    } else if (turn === 'b' && lastMove) {
        time.black.elapsedTime += currentTime - lastMove
    }
}

export default stopTimer
