import { AiOutlineDelete } from 'react-icons/ai'
import { Room } from 'types'

import useRemoveRoom from '../../../hooks/useRemoveRoom'

const DeleteIcon = ({ _id }: Room) => {
	const removeRoom = useRemoveRoom()

	return (
		<AiOutlineDelete
			className="transition duration-200 hover:scale-110"
			onClick={() => removeRoom(_id)}
			color="red"
			size={21}
		/>
	)
}

export default DeleteIcon
