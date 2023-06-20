import captureSound from 'assets/sounds/capture.mp3'

const sound = new Audio(captureSound)

const playCaptureSound = () => {
    sound.play()
}

export default playCaptureSound
