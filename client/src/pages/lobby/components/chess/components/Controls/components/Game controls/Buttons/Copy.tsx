import { useAppDispatch, useAppSelector } from 'redux/store'
import { RiFileCopy2Fill } from 'react-icons/ri'
import { convertToFEN } from 'helpers/tools/FEN'
import { showAlert } from 'ui/components/alert/redux/alertSlice'

const Copy = () => {
    const dispatch = useAppDispatch()
    const { chessBoard } = useAppSelector((store) => store.lobby.chess)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const handleOnClick = async () => {
        const fen = convertToFEN(chessBoard)
        await navigator.clipboard.writeText(fen)
        alert('Copied FEN to clipboard', 'success')
    }

    const styles = 'cursor-pointer transition duration-200 hover:scale-110'

    return <RiFileCopy2Fill size={24} onClick={handleOnClick} className={styles} />
}

export default Copy
