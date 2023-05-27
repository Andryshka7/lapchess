import { AiOutlineDelete } from 'react-icons/ai'
import { useAppDispatch } from 'redux/store'
import axios from 'axios'
import { updateID } from 'pages/universe/modules/chess/store/chessSlice'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const DeleteIcon = ({ id }: { id: string }) => {
    const dispatch = useAppDispatch()
    return (
        <AiOutlineDelete
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={async () => {
                try {
                    await axios.delete(`${SERVER_URL}/rooms/${id}`)
                    dispatch(updateID(null))
                } catch (error) {}
            }}
            color='red'
            size={21}
        />
    )
}

export default DeleteIcon
