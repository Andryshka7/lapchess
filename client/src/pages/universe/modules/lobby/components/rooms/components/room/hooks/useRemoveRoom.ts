import { showAlert } from 'layout/alert/store/alertSlice'
import { setThisRoom } from 'pages/universe/modules/lobby/store/lobbySlice'
import { useAppDispatch } from 'redux/store'
import deleteRoom from 'api/rooms/deleteRoom'

const useRemoveRoom = () => {
    const dispatch = useAppDispatch()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (_id: string) => {
        try {
            await deleteRoom(_id)
            dispatch(setThisRoom(null))
            alert('Successfully deleted this room', 'success')
        } catch (error) {
            alert('Error deleting this room', 'error')
        }
    }
}

export default useRemoveRoom
