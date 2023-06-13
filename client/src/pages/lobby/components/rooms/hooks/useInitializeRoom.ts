import { showAlert } from 'layout/alert/store/alertSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { addRoom, updateGameId } from 'pages/lobby/store/actions'
import { useState } from 'react'
import createRoom from 'api/rooms/createRoom'
import socket from 'socket/socket'

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
