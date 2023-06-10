import axios from 'axios'
import { showAlert } from 'layout/alert/store/alertSlice'
import { setThisRoom } from 'pages/universe/modules/lobby/store/lobbySlice'
import { useAppDispatch } from 'redux/store'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const useDeleteRoom = () => {
    const dispatch = useAppDispatch()

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    return async (_id: string) => {
        try {
            await axios.delete(`${SERVER_URL}/rooms/${_id}`)
            dispatch(setThisRoom(null))
            alert('Successfully deleted this room', 'success')
        } catch (error) {
            alert('Error deleting this room', 'error')
        }
    }
}

export default useDeleteRoom
