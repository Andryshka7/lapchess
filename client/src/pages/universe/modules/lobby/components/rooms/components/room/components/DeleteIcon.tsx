import { AiOutlineDelete } from 'react-icons/ai'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import useDeleteRoom from '../hooks/useDeleteRoom'

const DeleteIcon = ({ _id }: Room) => {
    const deleteRoom = useDeleteRoom()

    return (
        <AiOutlineDelete
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={() => deleteRoom(_id)}
            color='red'
            size={21}
        />
    )
}

export default DeleteIcon
