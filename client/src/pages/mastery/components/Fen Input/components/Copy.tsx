import { convertToFEN } from 'helpers/tools/FEN'
import { RiFileCopy2Fill } from 'react-icons/ri'
import { useAppSelector } from 'redux/store'
import { useShowAlert } from 'ui/components/Alert/hooks'

const Copy = () => {
	const { chessBoard } = useAppSelector((store) => store.mastery)
	const alert = useShowAlert()

	const handleOnClick = async () => {
		const fen = convertToFEN(chessBoard)
		await navigator.clipboard.writeText(fen)
		alert('Copied FEN to clipboard', 'success')
	}

	const styles = 'cursor-pointer transition duration-200 hover:scale-110'

	return <RiFileCopy2Fill size={20} onClick={handleOnClick} className={styles} />
}

export default Copy
