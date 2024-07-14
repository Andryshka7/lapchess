import initialChessBoard from 'config/chessBoard/chessBoard'
import { updateChessBoard } from 'pages/mastery/redux/actions'
import { VscDebugRestart } from 'react-icons/vsc'
import { useAppDispatch } from 'redux/store'

const Reset = () => {
	const dispatch = useAppDispatch()

	const handleOnClick = async () => {
		dispatch(updateChessBoard(initialChessBoard))
	}

	const styles = 'cursor-pointer transition duration-200 hover:scale-110'

	return <VscDebugRestart size={20} onClick={handleOnClick} className={styles} />
}

export default Reset
