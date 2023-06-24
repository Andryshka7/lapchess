import { useAppDispatch } from 'redux/store'
import { deleteRoom } from 'api/rooms'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { removeRoom, updateGameConfig } from 'pages/lobby/redux/actions'
import socket from 'socket'

const useRemoveRoom = () => {
    const dispatch = useAppDispatch()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (_id: string) => {
        try {
            await deleteRoom(_id)
            socket.emit('DELETE_ROOM', _id)

            dispatch(removeRoom(_id))
            dispatch(updateGameConfig(null))

            alert('Successfully deleted this room', 'success')
        } catch (error) {
            alert('Error deleting this room', 'error')
        }
    }
}

export default useRemoveRoom
