import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import { addRoom } from 'pages/lobby/modules/rooms/redux/actions'
import { updateGameId } from 'pages/lobby/modules/chess/redux/actions'
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

            socket.emit('CREATE_ROOM', room)
            const gameId = room._id

            dispatch(addRoom(room))
            dispatch(updateGameId(gameId))

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