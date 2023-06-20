import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { createRoom } from 'api/rooms'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { addRoom, updateGameId } from 'pages/lobby/redux/actions'
import socket from 'socket'
const useInitializeRoom = (hideModal: () => void) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((store) => store.auth)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const initializeRoom = async (color: string, time: string) => {
        try {
            setLoading(true)

            const room = await createRoom(user?._id || null, color, time)

            socket.emit('CREATE_ROOM', room)
            dispatch(addRoom(room))
            dispatch(updateGameId(room._id))

            alert('Successfully created new room!', 'success')
            hideModal()
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return { loading, error, initializeRoom }
}

export default useInitializeRoom
