import { Chess } from '../../../types/Chess'

const handleTimeControls = (state: Chess, currentTime: number) => {
    const {
        time,
        chessBoard: { turn, chessMoves }
    } = state

    if (chessMoves.length === 2) {
        time.startingPoint = currentTime
        time.lastMove = currentTime
    }

    if (chessMoves.length > 2 && time.lastMove) {
        const timePassed = currentTime - time.lastMove
        
        if (turn === 'b') {
            time.whiteElapsedTime += timePassed
        } else {
            time.blackElapsedTime += timePassed
        }
        time.lastMove = currentTime
    }
}

export default handleTimeControls
