import { quitGame } from 'pages/lobby/modules/chess/redux/actions'
import { useAppDispatch } from 'redux/store'

const QuitButton = () => {
	const dispatch = useAppDispatch()

	return (
		<button
			className="m-auto block rounded-lg bg-red-500 px-10 py-2 text-3xl font-semibold transition duration-200 hover:scale-105"
			onClick={() => dispatch(quitGame())}
		>
			Quit
		</button>
	)
}

export default QuitButton
