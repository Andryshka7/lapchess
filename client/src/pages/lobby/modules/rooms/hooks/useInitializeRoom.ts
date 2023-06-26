import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { addRoom } from 'pages/lobby/modules/rooms/redux/actions'
import { updateGameConfig } from 'pages/lobby/modules/chess/redux/actions'
import API from 'api'
import socket from 'socket'

const useInitializeRoom = (hideModal: () => void) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((store) => store.auth)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const initializeRoom = async (selectedColor: string, actualColor: string, time: string) => {
        try {
            setLoading(true)

            const room = await API.createRoom(user?._id || null, selectedColor, actualColor, time)

            const config = { gameId: room._id, color: actualColor }

            socket.emit('CREATE_ROOM', room)

            dispatch(addRoom(room))
            dispatch(updateGameConfig(config))

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
