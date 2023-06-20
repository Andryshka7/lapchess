import winSound from 'assets/sounds/ez4ence.mp3'

const sound = new Audio(winSound)

const playwinSound = () => {
    sound.play()
}

export default playwinSound
