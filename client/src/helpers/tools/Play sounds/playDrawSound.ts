import drawSound from 'assets/sounds/draw.mp3'

const sound = new Audio(drawSound)

const playdrawSound = () => {
	sound.play()
}

export default playdrawSound
