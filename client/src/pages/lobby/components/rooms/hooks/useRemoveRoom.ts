import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { removeRoom, updateGameId } from 'pages/lobby/redux/actions'
import { useAppDispatch } from 'redux/store'
import deleteRoom from 'api/rooms/deleteRoom'
import socket from 'socket/socket'

const useRemoveRoom = () => {
    const dispatch = useAppDispatch()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (_id: string) => {
        try {
            await deleteRoom(_id)
            socket.emit('DELETE_ROOM', _id)

            dispatch(updateGameId(null))
            dispatch(removeRoom(_id))

            alert('Successfully deleted this room', 'success')
        } catch (error) {
            alert('Error deleting this room', 'error')
        }
    }
}

export default useRemoveRoom
