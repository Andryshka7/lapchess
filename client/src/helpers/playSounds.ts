import { Sounds } from 'types'

import captureSound from 'assets/sounds/capture.mp3'
import moveSound from 'assets/sounds/move.mp3'
import mateSound from 'assets/sounds/ez4ence.mp3'
import drawSound from 'assets/sounds/draw.mp3'

const playSounds = (sounds: Sounds) => {
    const { move, capture, mate, draw } = sounds

    if (capture) {
        new Audio(captureSound).play()
    } else if (move) {
        new Audio(moveSound).play()
    }
    if (mate) {
        new Audio(mateSound).play()
    }
    if (draw) {
        new Audio(drawSound).play()
    }
}

export default playSounds
