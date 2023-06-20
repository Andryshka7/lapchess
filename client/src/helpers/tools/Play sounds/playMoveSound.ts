import moveSound from 'assets/sounds/move.mp3'

const sound = new Audio(moveSound)

const playMoveSound = () => {
    sound.play()
}

export default playMoveSound
