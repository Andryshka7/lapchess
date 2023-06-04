import { AiOutlineDelete } from 'react-icons/ai'
import { useAppDispatch } from 'redux/store'
import axios from 'axios'
import { showAlert } from 'layout/alert/store/alertSlice'
import { setThisRoom } from 'pages/universe/modules/lobby/store/lobbySlice'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const DeleteIcon = ({ id }: { id: string }) => {
    const dispatch = useAppDispatch()

    const alert = (text: string, type: string) => {
        dispatch(showAlert({ text, type }))
    }

    const deleteRoom = async () => {
        try {
            await axios.delete(`${SERVER_URL}/rooms/${id}`)
            dispatch(setThisRoom(null))
            alert('Successfully deleted this room', 'success')
        } catch (error) {
            alert('Error deleting this room', 'error')
        }
    }

    return (
        <AiOutlineDelete
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={deleteRoom}
            color='red'
            size={21}
        />
    )
}

export default DeleteIcon
