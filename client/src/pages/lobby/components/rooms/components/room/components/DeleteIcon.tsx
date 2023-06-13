import { AiOutlineDelete } from 'react-icons/ai'
import useRemoveRoom from '../../../hooks/useRemoveRoom'
import { Room } from 'types/Room'

const DeleteIcon = ({ _id }: Room) => {
    const removeRoom = useRemoveRoom()

    return (
        <AiOutlineDelete
            className='absolute right-10 transition duration-200 hover:scale-110'
            onClick={() => removeRoom(_id)}
            color='red'
            size={21}
        />
    )
}

export default DeleteIcon
